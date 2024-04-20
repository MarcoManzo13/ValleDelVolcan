<template>
    <div class="my-10">
        <v-card
            style="background-color: #edf6f9;"
            class="ma-10 pa-10"
        >
            <p class="text-center font-size-h1 mb-8">Nuestras Rutas</p> 
            <p class="text-center font-size-h3 ma-10">
                Consulta disponibilidad de servicio en tu área. Las opciones son amplias, nos podemos adaptar a tus necesidades.
            </p> 
        </v-card>
            <div class="mx-15">
                <v-row>
                    <v-col cols="12" md="6" xl="6">
                        <v-card class="pa-5">
                            <v-card-title>                            
                                <div class="d-flex text-center justify-center font-size-h3">
                                    <p>San Andrés Cholula</p> 
                                </div>
                            </v-card-title>
                            <v-img
                                src="../assets/Rutas/Ruta1.png"
                                width="100%"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" xl="6">
                        <v-card class="pa-5">
                            <v-card-title>                            
                                <div class="d-flex text-center justify-center font-size-h3">
                                    <p>San Pedro Cholula</p> 
                                </div>
                            </v-card-title>
                            <v-img
                                src="../assets/Rutas/Ruta2.png"
                                width="100%"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6" xl="6">
                        <v-card class="pa-5">
                            <v-card-title>                            
                                <div class="d-flex text-center justify-center font-size-h3">
                                    <p>Lomas de Angelópolis</p> 
                                </div>
                            </v-card-title>
                            <v-img
                                src="../assets/Rutas/Ruta3.png"
                                width="100%"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" xl="6">
                        <v-card class="pa-5">
                            <v-card-title>                            
                                <div class="d-flex text-center justify-center font-size-h3">
                                    <p>Central de Abastos</p> 
                                </div>
                            </v-card-title>
                            <v-img
                                src="../assets/Rutas/Ruta4.png"
                                width="100%"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import '~/Styles.css';
    * {
        font-family: Dosis, sans-serif;
    }
</style>