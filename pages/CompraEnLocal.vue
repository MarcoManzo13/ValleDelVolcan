<template>
    <div>
      <div style="width: 100%;" class="d-flex align-center justify-center text-center mt-5 text-h4">
        <p class="mb-5 font-size-h2">Compras en la Purificadora</p>
      </div>
      <v-card
      style="background-color: #edf6f9;"
      class="mx-10"
      >
        <v-carousel progress="primary" hide-delimiters class="d-flex flex-column justify-center" style="height: 100%;">
            <v-carousel-item v-for="(item, i) in items" :key="i" cover>
              <v-row class="d-flex justify-center align-center mt-5">
                <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center">
                  <v-img :src="item.image" alt="Photo of the service" max-width="100%" />
                </v-col>
                <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center space-between flex-column">
                  <v-card color="#fff" class="my-10">
                    <v-card-title class="d-flex flex-column px-9 font-size-h3" style="line-height: 1.5">
                      <span class="mt-3" style="width: 100%;">{{ item.nombre }}</span>
                    </v-card-title>
                    <v-card-subtitle class="font-size-h5 pa-8 text-wrap text-justify" style="line-height: 1.5">
                      {{ item.descripcion }}
                    </v-card-subtitle>
                    <v-card-text class="px-9 font-size-h6" style="line-height: 1.5">
                      <span class="my-3" style="width: 100%;">{{ item.precio }}</span>
                      <br>
                      <span class="mt-3" style="width: 100%;">{{ item.horario }}</span>
                      <br>
                      <span class="mt-3" style="width: 100%;">{{ item.descripcion2 }}</span>
                      <br>
                      <span class="mt-3" style="width: 100%;">{{ item.descripcion3 }}</span>
                      <br>
                      <span class="mt-3" style="width: 100%;">{{ item.descripcion4 }}</span>
                      <br>
                      <br>
                      <span class="mt-3" style="width: 100%;">{{ item.facturacion }}</span>
                    </v-card-text>
                    <v-card-actions class="d-flex align-center justify-center text-center mt-16" style="max-width: 100%;">
                      <v-btn rounded="xl" variant="outlined" style="width: 100%;">
                        <p class="mr-3 text-h5">Cotizar</p>
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
import ServicioIndividual from '../assets/Servicios/ServicioIndividual.png'
import AutoServicio from '../assets/Servicios/autoservicio.png'

export default {
    data () {
      return {
        items: [
          {
            image: AutoServicio,
            nombre: 'Venta de agua en local:',
            precio: '$15.00 por unidad',
            descripcion: 'Rellena tu garrafón directo en nuestra tienda o en el autoservicio.',
            horario: 'Ventanilla Lunes a viernes 8 am - 7 pm. Sábado 9 am - 4pm.',
            descripcion2: 'La limpieza y sellado de garrafón en ventanilla se incluye con el servicio.',
            descripcion3: '',
            descripcion4: 'Contamos con servicio de facturación!',
            facturacion: '',
          },
          {
            image: ServicioIndividual,
            nombre: 'Venta de garrafón:',
            precio: 'Valle del Volcán 11lt: $75.00 pesos',
            horario: 'Valle del Volcán 20lt: $95.00 pesos',
            descripcion: 'Contamos con las siguientes opciones de garrafones:',
            descripcion2: 'Ciel 20lt: $100.00 pesos',
            descripcion3: 'Bonafont 20lt: $105.00 pesos ',
            descripcion4: 'Epura 20lt: $125.00 pesos',
            facturacion: 'Contamos con servicio de facturación!',
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