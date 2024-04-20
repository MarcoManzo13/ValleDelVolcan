<template>
    <div>
        <v-layout>
            <!-- App bar with navigation icon -->
            <v-app-bar style="background-color: #add0db; color:#0B4864;">
                <v-app-bar-nav-icon v-if="!isWideScreen" @click.stop="drawer = !drawer" />
                <v-app-bar-title style="text-align: left;">VALLE DEL VOLCÁN</v-app-bar-title>
                <!-- Buttons rendered in app bar if screen is wide -->
                <v-btn v-if="isWideScreen" text to="/">Inicio</v-btn>
                <v-btn v-if="isWideScreen" text to="/Tienda">Tienda</v-btn>
                <v-btn v-if="isWideScreen" text to="/Contactanos">Contáctanos</v-btn>
            </v-app-bar>

            <!-- Navigation drawer -->
            <v-navigation-drawer v-model="drawer" :mini-variant="isWideScreen">
                <v-list>
                    <v-list-item link to="/">
                        <v-list-item-title>Inicio</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/Tienda">
                        <v-list-item-title>Tienda</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/Contactanos">
                        <v-list-item-title>Contáctanos</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <slot />
            </v-main>
        </v-layout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            isWideScreen: false, // Variable to track screen width
        };
    },
    mounted() {
        // Check screen width on component mount (ensures window is available)
        this.checkScreenWidth();

        // Listen for window resize event
        window.addEventListener('resize', this.checkScreenWidth);
    },
    beforeDestroy() {
        // Remove event listener when component is destroyed
        window.removeEventListener('resize', this.checkScreenWidth);
    },
    methods: {
        checkScreenWidth() {
            if (typeof window !== 'undefined') {
                // Check for window existence to avoid errors
                this.isWideScreen = window.innerWidth > 1284;
            }
        },
    },
};
</script>

<style scoped>

</style>
