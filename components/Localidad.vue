<template>
    <div class="mb-10">
        <p class="text-center font-size-h1 mb-5">Dirección</p> 

        <v-card
          color="#0B4864"
          theme="dark"
          class="mx-15"
          href="https://maps.app.goo.gl/mg9mXJYQhmEbrkH16"
          rel="noopener"
          target="_blank"
        >
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="12" md="4" xl="4">
                <div class="d-flex flex-column align-center justify-center text-center" style="height: 100%;" >
                  <div>
                    <v-card-title class="text-wrap font-size-h2 text-justify" style="line-height: 1.5;">
                      Camino Real a San Andrés 1230, Local 1 Plaza Bahías, 72810 San Andrés Cholula, Puebla México.
                    </v-card-title>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="8" xl="8">
                <v-img
                  src="../assets/mapaLocalidad.png"
                  aspect-ratio="2/3"
                  height="100%"
                  width="100%"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import '~/Styles.css';
    * {
      font-family: Dosis, sans-serif;
    }
</style>