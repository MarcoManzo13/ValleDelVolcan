<template>
    <div>
        <Servicios :products="productsToPass"/>
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
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus nostrum itaque odio cum non iste inventore quae quibusdam sequi, quia consectetur, sed saepe omnis laudantium voluptates! Et aliquid nostrum minima tenetur atque quidem alias fugiat? Saepe accusantium libero animi officiis ad ab eum reprehenderit similique molestias. Quibusdam, laboriosam consequatur.'
            },
            {
              id: 1,
              image: BotellaDeAgua,
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus nostrum itaque odio cum non iste inventore quae quibusdam sequi, quia consectetur, sed saepe omnis laudantium voluptates! Et aliquid nostrum minima tenetur atque quidem alias fugiat? Saepe accusantium libero animi officiis ad ab eum reprehenderit similique molestias. Quibusdam, laboriosam consequatur.'
            },
            {
              id: 1,
              image: BotellaDeAgua,
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus nostrum itaque odio cum non iste inventore quae quibusdam sequi, quia consectetur, sed saepe omnis laudantium voluptates! Et aliquid nostrum minima tenetur atque quidem alias fugiat? Saepe accusantium libero animi officiis ad ab eum reprehenderit similique molestias. Quibusdam, laboriosam consequatur.'
            },
            // ... more products
          ]
        };
      }
    }
</script>

<style lang="scss" scoped>

</style>