<template>
    <div>
        <div style="width: 100%;" class="d-flex align-center justify-center text-center mt-5 text-h4">
            <p class="mb-5">Botellas Personalizadas</p>
        </div>
        <v-card
        style="background-color: #edf6f9;"
        class="mx-10"
        >
            <v-carousel progress="primary" hide-delimiters class="d-flex flex-column justify-center" style="height: 100%;">
                <v-carousel-item v-for="(item, i) in items" :key="i" cover>
                    <v-row class="d-flex justify-center align-center mt-5">
                        <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center">
                            <v-img :src="item.image" alt="Photo of the service" max-width="80%" />
                        </v-col>
                        <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center space-between flex-column">
                            <v-card color="#fff">
                                <v-card-title class="d-flex flex-column px-9">
                                    <span class="mt-3" style="width: 100%;">{{ item.nombre }}</span>
                                    <span class="my-3" style="width: 100%;">{{ item.precio }}</span>
                                </v-card-title>
                                <v-card-subtitle class="text-h6 pa-8 text-wrap text-justify">
                                    {{ item.descripcion }}
                                </v-card-subtitle>
                                <v-card-actions class="d-flex align-center justify-center text-center mt-16" style="max-width: 100%;">
                                    <v-btn rounded="xl" variant="outlined" style="width: 100%;">
                                    <p class="mr-3">Cotizar</p>
                                    <Icon name="fa-brands:whatsapp" size="1.5em" />
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </v-card>
        <Footer />
    </div>
</template>

<script>
import BotellaBoston from '../assets/Servicios/BotellaBoston.png'
import BotellaAnillos from '../assets/Servicios/BotellaAnillos.png'
export default {
    data () {
        return {
            items: [
                {
                    image: BotellaBoston,
                    nombre: 'Botella Boston 1lt',
                    precio: '$13.50 por unidad',
                    descripcion: 'Botella de plástico Bostón 1lt etiquetada, con vinil eco mate o brillantes con marca. Rejilla de 24 botellas.'
                },
                {
                    image: BotellaBoston,
                    nombre: 'Botella Boston 500ml',
                    precio: '$11.00 por unidad',
                    descripcion: 'Botella de plástico Bostón 500ml etiquetada, con vinil eco mate o brillantes con marca. Rejilla de 24 botellas.'
                },
                {
                    image: BotellaAnillos,
                    nombre: 'Botella Anillos 1lt',
                    precio: '$9.50 por unidad',
                    descripcion: 'Botella de plástico anidada 1lt, etiquetada con marca. Rejilla de 24 botellas.'
                },
                {
                    image: BotellaAnillos,
                    nombre: 'Botella Anillos 500ml',
                    precio: '$7.50 por unidad',
                    descripcion: 'Botella de plástico anidada 1lt, etiquetada con marca. Rejilla de 24 botellas.'
                },
            ],
        }
    },
}
</script>

<style scoped>
    * {
        font-family: Dosis, sans-serif;
    }
</style>