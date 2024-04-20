<template>
    <div style="background-color: #edf6f9;">
        <div style="width: 100%;" class="d-flex align-center justify-center text-center mt-13 text-h4">
            <p class="mb-5">Entrega a Domicilio</p>
        </div>
        <v-row class="my-15 d-flex justify-center align-center">
            <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center">   
                <v-img 
                    src="../assets/Servicios/ServicioDomicilio.png" 
                    alt="Foto del la sucursal" 
                    max-width="90%"
                />
            </v-col>
            <v-col cols="12" md="4" xl="4" class="d-flex align-center justify-center space-between flex-column"> 
                <v-card
                    color="#Fff"
                >
                    <br />
                    <v-card-title class="d-flex flex-column">
                        <span class="mt-3 text-h5" style="width: 100%;">Entrega a Domicilio</span>
                        <span class="my-3 text-h5" style="width: 100%;">Precio $15 - $25, sujeto a zona de repartición.</span>
                    </v-card-title>
                    <br />
                    <v-card-text class="text-h6">
                        ¡Nuestra calidad se nota en el sabor!
                    </v-card-text>
                    <v-card-text class="text-h6">
                        Pregunta por nuestros convenios de volumen.
                    </v-card-text>
                    <v-card-text class="text-h6">
                        ¡Contamos con servicio de facturación!
                    </v-card-text>
                    <v-card-actions class="d-flex align-center justify-center text-center mt-16" style="max-width: 100%;">
                        <v-btn rounded="xl" variant="outlined" style="width: 100%;">
                            <p class="mr-3">Cotizar</p> 
                            <Icon name="fa-brands:whatsapp" size="1.5em"/>
                        </v-btn>
                    </v-card-actions>
                    <br />
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