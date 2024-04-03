<template>
    <div>
      <v-card
        style="height: 90vh; width: 100%;"
        image="../assets/HeroLandingImage.jpg"
        theme="dark"
      >
        <v-container fluid class="d-flex pl-15">
              <v-card 
                elevated 
                style="height: 80vh; width: 25vw;" 
                class="my-5 ml-15 d-flex align-center flex-column"
                color="#1F7087"
            >
                <v-card-title class="text-h5 my-5">
                    Valle del volcán
                </v-card-title>

                <v-card-subtitle class="text-h7 my-5 pa-10 text-wrap text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ab nulla! Culpa modi dolores, quia cupiditate eligendi quas autem at expedita earum esse deserunt quasi voluptates unde minima qui error.
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn rounded="xl" variant="outlined" class="mt-16 px-7">
                        Ir a...
                    </v-btn>
                </v-card-actions>
              </v-card>
        </v-container>
      </v-card>
      <Servicios :products="productsToPass"/>
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
import BotellaDeAgua from '../assets/BotellaDeAgua.png'
    export default {
      data() {
        return {
          // Cambiar IDs para que se vayan a otras páginas, crear esas otras páginas también
          productsToPass: [
            {
              id: 1,
              image: BotellaDeAgua,
              description: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe animi consequuntur dolores reprehenderit voluptas beatae rerum praesentium corrupti, fugiat laborum?'
            },
            {
              id: 1,
              image: BotellaDeAgua,
              description: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe animi consequuntur dolores reprehenderit voluptas beatae rerum praesentium corrupti, fugiat laborum?'
            },
            {
              id: 1,
              image: BotellaDeAgua,
              description: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe animi consequuntur dolores reprehenderit voluptas beatae rerum praesentium corrupti, fugiat laborum?'
            },
            // ... more products
          ]
        };
      }
    }
</script>

<style lang="scss" scoped>

</style>