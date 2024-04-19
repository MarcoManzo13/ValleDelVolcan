<template>
    <div>
        <v-row>
            <v-col cols="1"/>
            <v-col cols="5" class="d-flex align-center justify-center">
                <v-img 
                src="../assets/BotellaServicio.png" 
                alt="Foto del la sucursal" 
                max-width="50%"
                />
            </v-col>
            <v-col cols="5" class="d-flex align-center justify-center space-between flex-column">
                <span class="mt-3" style="width: 80%;">Entrega a Domicilio</span>
                <span class="my-3" style="width: 80%;">$100</span>
                <v-card
                    color="#1F7087"
                    height="80%"
                    width="80%"
                >
                    <v-card-text class="text-h7 pa-10 text-wrap text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ab nulla! Culpa modi dolores, quia cupiditate eligendi quas autem at expedita earum esse deserunt quasi voluptates unde minima qui error.
                    </v-card-text>
                    <v-card-actions class="d-flex align-center justify-center text-center mt-16" style="max-width: 100%;">
                        <v-btn rounded="xl" variant="outlined" class="mt-16 px-7" style="width: 100%;">
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