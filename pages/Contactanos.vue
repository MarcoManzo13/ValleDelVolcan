<template>
    <div>
        <v-row class="d-flex align-center justify-center ma-15">
            <v-col cols="12" md="6" xl="6" class="d-flex align-center justify-center text-center">
                <v-img 
                src="../assets/mapaLocalidad.png" 
                alt="Foto del la sucursal" 
                max-width="100%"
                />
            </v-col>
            <v-col cols="12" md="6" xl="6" class="d-flex align-center justify-center" >
                <v-card 
                    elevated 
                    class="my-5 pa-10 d-flex align-center justify-center space-between flex-column"
                    color="#0B4864"
                >
                    <v-card-title class="text-h4 mt-5">
                        Sucursal
                    </v-card-title>
                    <v-card-subtitle class="text-h5 pa-10 text-wrap text-justify" style="line-height: 1.5;">
                        Camino Real a San Andrés 1230, Local 1 Plaza Bahías, 72810 San Andrés Cholula, Puebla México.
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn href="https://maps.app.goo.gl/mg9mXJYQhmEbrkH16" rel="noopener" target="_blank" rounded="xl" variant="outlined" class="px-7">
                            Visitar...
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        
        <Rutas />
        <Footer />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>