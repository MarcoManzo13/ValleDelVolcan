<template>
    <div style="background-color: #add0db; color:#0B4864;">
        <v-row class="d-flex text-center mx-10 mt-5">
            <v-col cols="12" md="4" xl="4" class="d-flex flex-column align-start justify-space-evenly">
                <div class="my-2">
                    <div class="d-flex flex-row align-start justify-start text-left ml-3 mb-2">
                        <Icon name="fa6-solid:location-dot" size="2em" class="ml-1"/>
                        <p class="text-h5 ml-2">Dirección</p>
                    </div>
                    <div class="ml-5">
                        <p class="d-flex text-justify text-wrap">
                            Camino Real a San Andrés 1230, Local 1 Plaza Bahías, 72810 San Andrés Cholula, Puebla México.
                        </p>
                    </div>
                </div>
                <div class="my-2">
                    <div class="d-flex flex-row align-start justify-start text-left ml-3 mb-2">
                        <Icon name="fa6-solid:clock" size="2em" class="ml-2"/>
                        <p class="text-h5 ml-2">Horario</p>
                    </div>
                    <div class="ml-5">
                        <p class="d-flex text-justify text-wrap">
                            Servicio Local: 
                            <br>
                            Lunes a Viernes 8:00am a 7:00pm. 
                            <br>
                            Sábado 9:00am a 4:00pm.
                            <br>
                            Autoservicio 24/7
                        </p>
                    </div>
                </div>

                <div class="my-2">
                    <div class="d-flex flex-row align-start justify-start text-left ml-3 mb-2">
                        <Icon name="fa6-solid:phone" size="2em" class="ml-2"/>
                        <p class="text-h5 ml-2">Contacto</p>
                    </div>
                    <div class="ml-5">
                        <p class="d-flex text-justify text-wrap">
                            Servicio a Domicilio: 2215304660
                        </p>
                    </div>
                </div>

            </v-col>

            <v-col cols="12" md="4" xl="4" class="d-flex flex-column align-center justify-center">
                <div class="d-flex flex-column justify-center align-center">
                    <div class="mx-10" style="max-width: 100%; color:#0B4864;">
                        <p class="text-h4">Menu</p>
                        <NuxtLink to="/" style="text-decoration: none;">
                            <v-btn class="mt-3" style="width: 100%; color: #0B4864;">
                                Inicio
                            </v-btn>
                        </NuxtLink>
                        <NuxtLink to="/Tienda" style="text-decoration: none;">
                            <v-btn class="mt-3" style="width: 100%; color: #0B4864;">
                                Tienda
                            </v-btn>
                        </NuxtLink>
                        <NuxtLink to="/Contactanos" style="text-decoration: none;">
                            <v-btn class="mt-3" style="width: 100%; color: #0B4864;">
                                Contáctanos
                            </v-btn>
                        </NuxtLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4" xl="4" class="d-flex flex-column align-center justify-center">
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