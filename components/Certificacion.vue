<template>
    <div class="mb-10">
        <v-card
            color="#0B4864"
            theme="dark"
            class="mx-15"
        >
            <v-container fluid>
                <v-row class="d-flex align-center justify-center">
                    <v-col cols="12" md="6" xl="6">
                        <div class="d-flex flex-column align-center justify-center text-center" style="height: 100%;" >
                            <div>
                                <v-card-title class="text-h5 text-center mb-5">
                                    Certificaciones
                                </v-card-title>
                                <v-card-text class="text-wrap text-justify my-5 text-h6">
                                    Trataquim es una empresa que coadyuve al desarrollo de la sociedad actual globalizada con penetración y expansión en el mundo.
                                    Ofreciéndonos la certificación mensual de calidad en base a la Norma Oficial Mexicana "NOM-201-SSA1-2015"
                                </v-card-text>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" xl="6">]
                        <v-carrousel>
                            <v-carrousel-item v-for="(item, i) in items" :key="i" cover>
                                <div class="d-flex align-center justify-center">
                                    <v-img
                                        :src=item.image
                                        max-width="100%"
                                    />
                                </div>
                            </v-carrousel-item>
                        </v-carrousel>
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
            image: Certificacion1,
          },
          {
            image: Certificacion2,
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>