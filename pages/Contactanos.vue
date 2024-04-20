<template>
    <div>
        <v-row class="d-flex align-center justify-center ma-10">
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
                    <v-card-title class="text-h5 mt-5">
                        Sucursal
                    </v-card-title>
                    <v-card-subtitle class="text-h7 pa-10 text-wrap text-justify">
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