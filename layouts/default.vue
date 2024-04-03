<template>
    <div>
        <v-layout>
            <v-app-bar>
                <v-app-bar-title style="text-align: left;">Valle del Volcán</v-app-bar-title>
                <template v-slot:append>
                    <NuxtLink icon to="/">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Inicio
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink icon to="/Tienda">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Tienda
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink icon to="/Contactanos">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Contáctanos
                        </v-btn>
                    </NuxtLink>
                </template>
            </v-app-bar>      

            <v-main>
                <slot />
            </v-main>
        </v-layout>    
    </div>
</template>


<script>

</script>


<style scoped>

</style>