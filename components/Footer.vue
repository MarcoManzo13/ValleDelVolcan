<template>
    <div style="background-color: #add0db;">
        <v-row class="d-flex justify-center text-center mx-10 mt-5">
            <v-col cols="12" md="4" xl="4" class="mt-5">
                <div class="d-flex flex-column">
                    <div class="d-flex flex-row text-center justify-center align-center">
                        <Icon name="fa6-solid:location-dot" size="9em"/>
                        <div class="ml-5">
                            <p class="text-left text-h5">Dirección</p>
                            <p class="d-flex text-justify text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi voluptate quos veritatis libero esse consequuntur ducimus incidunt aspernatur earum.</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="d-flex flex-row text-center justify-center align-center">
                        <Icon name="fa6-solid:clock" size="9em"/>
                        <div class="ml-5">
                            <p class="text-left text-h5">Horario</p>
                            <p class="d-flex text-justify text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi voluptate quos veritatis libero esse consequuntur ducimus incidunt aspernatur earum.</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="d-flex flex-row text-center justify-center align-center">
                        <Icon name="fa6-solid:phone" size="9em"/>
                        <div class="ml-5">
                            <p class="text-left text-h5">Contacto</p>
                            <p class="d-flex text-justify text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi voluptate quos veritatis libero esse consequuntur ducimus incidunt aspernatur earum.</p>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4" xl="4" class="mt-11">
                <div class="d-flex flex-column justify-start align-left">
                    <div class="d-flex flex-column mx-16" style="max-width: 100%;">
                        <p class="d-flex text-left text-h5">Menu</p>
                        <NuxtLink to="/" style="text-decoration: none; color: #000;">
                            <v-btn class="d-flex justify-start align-left text-left mt-3" style="width: 100%;">
                                Inicio
                            </v-btn>
                        </NuxtLink>
                        <NuxtLink to="/Tienda" style="text-decoration: none; color: #000;">
                            <v-btn class="d-flex justify-start align-left text-left mt-3" style="width: 100%;">
                                Tienda
                            </v-btn>
                        </NuxtLink>
                        <NuxtLink to="/Contactanos" style="text-decoration: none; color: #000;">
                            <v-btn class="d-flex justify-start align-left text-left mt-3" style="width: 100%;">
                                Contáctanos
                            </v-btn>
                        </NuxtLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4" xl="4" class="mt-5">
                <div>
                    <img style="width: 80%;" src="../assets/ValleDelVolcanLogo.png" alt="Logo Valle del Volcán">
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>