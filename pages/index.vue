<template>
    <div>
      <v-card
          style="height: 80vh; width: 100%;"
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
                    style="height: 70vh; width: 100%; border-radius: 6%;" 
                    class="my-5 d-flex align-center flex-column justify-center justify-space-evenly text-center"
                    color="#fff"
                >
                    <v-card-title class="text-h4">
                        Valle del Volcán
                    </v-card-title>

                    <v-card-subtitle class="text-h6 px-8 text-wrap text-center" style="line-height: 1.5">
                      Nuestra misión es proporcionar agua purificada de calidad óptima, caracterizada por su equilibrio perfecto de sales para la hidratación humana y la preparación de alimentos, todo esto ofreciendo un servicio puntual y oportuno.
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
      <v-lazy :min-height="100" :options="{'threshold':1}" transition="scroll-x-reverse-transition">
        <Servicios/>
      </v-lazy>
      <v-lazy :min-height="100" :options="{'threshold':1}" transition="scroll-x-reverse-transition">
        <Localidad />
      </v-lazy>
      <v-lazy :min-height="100" :options="{'threshold':1}" transition="scroll-x-reverse-transition">
        <Rutas />
      </v-lazy>
      <v-lazy :min-height="100" :options="{'threshold':1}" transition="scroll-x-reverse-transition">
        <SobreNosotros />
      </v-lazy>
      <v-lazy :min-height="100" :options="{'threshold':1}" transition="scroll-x-reverse-transition">
        <Vision />
      </v-lazy>
      <v-lazy :min-height="100" :options="{'threshold':1}" transition="scroll-x-reverse-transition">
        <Certificacion />
      </v-lazy>
      <v-lazy :min-height="100" :options="{'threshold':1}" transition="scroll-x-reverse-transition">
        <ClientesConocidos />
      </v-lazy>
      <Footer />
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>