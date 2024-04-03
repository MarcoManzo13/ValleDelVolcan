<template>
    <div class="my-10">
      <p class="text-center text-h5 mb-10">Servicios</p>
      <div class="mx-10">
        <v-row no-gutters>
          <v-col v-for="product in products" :key="product.id">
            <v-card class="pa-5 mx-5">
              <v-img :src="product.image" height="20vh">
              </v-img>
              <v-card-text class="d-flex text-justify">
                {{ product.description }}
              </v-card-text>
              <v-card-actions>
                <NuxtLink :to="`/ProductoIndividual${product.id}`" style="text-decoration: none; color: #000;">
                  <v-btn class="d-flex justify-start align-left text-left mt-3" style="width: 100%;">
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
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // You can add any additional data here if needed
    };
  }
};
</script>

<style scoped>
</style>