<template>
    <div>
      <v-card
        style="height: 90vh; width: 100%;"
        image="../assets/HeroLandingImage.jpg"
        theme="dark"
      >
        <v-container fluid>
          <v-row justify="start">
            <v-col cols="12" sm="6" md="6">
              <v-card 
                elevated 
                style="height: 80vh; width: 25vw;" 
                class="my-5 d-flex align-center justify-center space-between flex-column"
                color="red"
            >
                <v-card-title class="text-h5 my-5">
                    Valle del volcán
                </v-card-title>

                <v-card-subtitle class="text-h7 my-5 pa-10 text-wrap text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ab nulla! Culpa modi dolores, quia cupiditate eligendi quas autem at expedita earum esse deserunt quasi voluptates unde minima qui error.
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn rounded="xl" variant="outlined" class="mt-16 px-7">
                        Go to...
                    </v-btn>
                </v-card-actions>

              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <Servicios />
      <Localidad />
      <Rutas />
      <SobreNosotros />
      <Vision />
      <Certificacion />
      <ClientesConocidos />
      <Footer />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>