<template>
    <div class="my-10">
      <p class="text-center text-h4 mb-10">Servicios</p>
      <div class="mx-10">
        <v-row>
          <v-col>
            <v-card class="pa-5">
              <v-card-title class="d-flex text-center justify-center text-h5">
                Compra en Local
              </v-card-title>

              <v-img src="~/assets/Servicios/ServicioIndividual.png" height="40vh"/>
              
              <v-card-actions>
                <NuxtLink to="/CompraEnLocal" style="text-decoration: none; color: #000; width: 100%;">
                  <v-btn class="d-flex justify-center align-center text-center mt-3" style="width: 100%;" variant="outlined">
                    Explorar
                  </v-btn>
                </NuxtLink>
              </v-card-actions>

            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-5">
              <v-card-title class="d-flex text-center justify-center text-h5">
                Botellas Personalizadas
              </v-card-title>

              <v-img src="~/assets/Servicios/BotellaBoston.png" height="40vh" />
              
              <v-card-actions>
                <NuxtLink to="/BotellasPersonalizadas" style="text-decoration: none; color: #000; width: 100%;">
                  <v-btn class="d-flex justify-center align-center text-center mt-3" style="width: 100%;" variant="outlined">
                    Explorar
                  </v-btn>
                </NuxtLink>
              </v-card-actions>

            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-5">
              <v-card-title class="d-flex text-center justify-center text-h5">
                Entrega a Domicilio
              </v-card-title>

              <v-img src="~/assets/Servicios/ServicioDomicilio.png" height="40vh" />
              
              <v-card-actions>
                <NuxtLink to="/EntregaADomicilio" style="text-decoration: none; color: #000; width: 100%;">
                  <v-btn class="d-flex justify-center align-center text-center mt-3" style="width: 100%;" variant="outlined">
                    Explorar
                  </v-btn>
                </NuxtLink>
              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </template>

<script>

</script>

<style scoped>
</style>