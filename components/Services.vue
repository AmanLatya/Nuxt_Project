<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <div>
    <div class="py-5 bg-gray">
      <div class="container">
        <!-- Header Section -->
        <div class="row text-center mb-5">
          <div class="col-md-12">
            <h1 class="text-primary">Services</h1>
            <div class="underline bg-primary mx-auto mb-4"></div>
          </div>
        </div>
        <!-- Service Cards -->
        <div class="row">
          <div v-for="product in products" :key="product.id"
            class="col-12 col-sm-6 col-md col-lg-3 mt-4 d-flex align-items-stretch">
            <NuxtLink :to="`/products/${product.id}`">
              <div class="card shadow border-0 ">
                <img class="card-img-top" :src="product.image" :alt="product.title"
                  style="height: 200px; object-fit: cover;" />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-primary">{{ product.title }}</h5>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}
</style>
