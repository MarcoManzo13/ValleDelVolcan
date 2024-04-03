<template>
    <div>
        <v-row class="d-flex align-center justify-center">
            <v-col cols="5" class="d-flex align-center justify-center text-center">
                <v-img 
                src="../assets/mapaLocalidad.png" 
                alt="Foto del la sucursal" 
                max-width="100%"
                />
            </v-col>
            <v-col cols="5" class="d-flex align-center justify-center">
                <v-card 
                    elevated 
                    style="height: 80vh; width: 25vw;" 
                    class="my-5 d-flex align-center justify-center space-between flex-column"
                    color="#1F7087"
                >
                    <v-card-title class="text-h5">
                        Sucursal
                    </v-card-title>
                    <v-card-subtitle class="text-h7 pa-10 text-wrap text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ab nulla! Culpa modi dolores, quia cupiditate eligendi quas autem at expedita earum esse deserunt quasi voluptates unde minima qui error.
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn rounded="xl" variant="outlined" class="mt-16 px-7">
                            Ir a...
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        
        <Footer />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>