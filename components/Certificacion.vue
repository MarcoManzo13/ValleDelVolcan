<template>
    <div class="mb-10">
        <v-card
            color="#0B4864"
            theme="dark"
            class="mx-15"
        >
            <v-container fluid>
                    <v-row class="d-flex align-center justify-space-evenly">
                        <v-col cols="12" md="6" xl="6">
                            <v-card-title class="font-size-h2 text-center mb-10">
                                Certificaciones
                            </v-card-title>
                            <v-card-text class="text-wrap text-justify font-size-h4" style="line-height: 1.5">
                                Trataquim es una empresa que ayuda al desarrollo de la sociedad actual globalizada con penetración y expansión en el mundo.
                                Ofreciéndonos la certificación mensual de calidad en base a la Norma Oficial Mexicana "NOM-201-SSA1-2015"
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" md="6" xl="6">
                            <v-carousel style="height: 100%;">
                                <v-carousel-item v-for="(item, i) in items" :key="i">
                                    <div class="d-flex align-center justify-center">
                                        <v-img
                                            :src=item.image
                                            height="100%"
                                        />
                                    </div>
                                </v-carousel-item>
                            </v-carousel>
                        </v-col>
                    </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import Certificacion1 from '../assets/Certificaciones/Certificacion1.png'
import Certificacion2 from '../assets/Certificaciones/Certificacion2.png'
export default {
    data () {
        return {
            items: [
                {
                    image: Certificacion2,
                },
                {
                    image: Certificacion1,
                },
            ],
        }
    },
}
</script>

<style scoped>
    @import '~/Styles.css';
    * {
        font-family: Dosis, sans-serif;
    }
</style>