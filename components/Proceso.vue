<template>
    <div>
        <div style="width: 100%;" class="d-flex align-center justify-center text-center mt-5 text-h4">
            <p>Conoce Nuestro Proceso</p>
        </div>
        <v-card
        style="background-color: #edf6f9;"
        class="ma-10"
        >
            <v-carousel progress="primary">
                <v-carousel-item v-for="(item, i) in items" :key="i" cover> 
                    <v-img :src="item.image" alt="Foto del Proceso" max-width="100%" />
                </v-carousel-item>
            </v-carousel>
        </v-card>
    </div>
</template>

<script>
import Proceso1 from '../assets/Proceso/Proceso1.png'
import Proceso2 from '../assets/Proceso/Proceso2.png'
import Proceso3 from '../assets/Proceso/Proceso3.png'
import Proceso4 from '../assets/Proceso/Proceso4.png'
import Proceso5 from '../assets/Proceso/Proceso5.png'
import Proceso6 from '../assets/Proceso/Proceso6.png'
import Proceso7 from '../assets/Proceso/Proceso7.png'
import Proceso8 from '../assets/Proceso/Proceso8.png'
import Proceso9 from '../assets/Proceso/Proceso9.png'
import Proceso10 from '../assets/Proceso/Proceso10.png'
import Proceso11 from '../assets/Proceso/Proceso11.png'
import Proceso12 from '../assets/Proceso/Proceso12.png'
import Proceso13 from '../assets/Proceso/Proceso13.png'

export default {
    data () {
        return {
            items: [
                {
                    image: Proceso1,
                },
                {
                    image: Proceso2,
                },
                {
                    image: Proceso3,
                },
                {
                    image: Proceso4,
                },
                {
                    image: Proceso5,
                },
                {
                    image: Proceso6,
                },
                {
                    image: Proceso7,
                },
                {
                    image: Proceso8,
                },
                {
                    image: Proceso9,
                },
                {
                    image: Proceso10,
                },
                {
                    image: Proceso11,
                },
                {
                    image: Proceso12,
                },
                {
                    image: Proceso13,
                },
            ],
        }
    },
}
</script>

<style scoped>
    * {
        font-family: Dosis, sans-serif;
    }
</style>