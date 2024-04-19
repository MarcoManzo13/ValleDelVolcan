<template>
    <div>
      <v-card
    style="height: 90vh; width: 100%;"
    image="../assets/HeroBannerImage.png"
    theme="dark"
>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
                offset-md="1"
            >
                <v-card 
                    elevated 
                    style="height: 80vh; width: 100%;" 
                    class="my-5 d-flex align-center flex-column"
                    color="#1F7087"
                >
                    <v-card-title class="text-h5">
                        Valle del volcán
                    </v-card-title>

                    <v-card-subtitle class="text-h7 px-10 text-wrap text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ab nulla! Culpa modi dolores, quia cupiditate eligendi quas autem at expedita earum esse deserunt quasi voluptates unde minima qui error.
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn rounded="xl" variant="outlined" class="px-7">
                            Ir a...
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
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