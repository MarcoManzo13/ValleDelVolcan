<template>
    <div style="background-color: #edf6f9;">
            <v-row class="mt-15 d-flex justify-center align-center">
                <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center">   
                    <v-img 
                        src="../assets/Servicios/ServicioIndividual.png" 
                        alt="Foto del la sucursal" 
                        max-width="90%"
                    />
                </v-col>
                <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center space-between flex-column"> 
                    <v-card
                        color="#fff"
                        height="80%"
                        width="80%"
                    >
                        <v-card-title class="d-flex flex-column">
                            <span class="mt-3" style="width: 100%;">Compra en Local</span>
                            <span class="my-3" style="width: 100%;">$15</span>
                        </v-card-title>
                        <v-card-text class="text-h7 pa-10 text-wrap text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ab nulla! Culpa modi dolores, quia cupiditate eligendi quas autem at expedita earum esse deserunt quasi voluptates unde minima qui error.
                        </v-card-text>
                        <v-card-actions class="d-flex align-center justify-center text-center mt-16" style="max-width: 100%;">
                            <v-btn rounded="xl" variant="outlined" style="width: 100%;">
                                <p class="mr-3">Cotizar</p> 
                                <Icon name="fa-brands:whatsapp" size="1.5em"/>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        <Footer />
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>