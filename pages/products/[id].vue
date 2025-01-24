<script setup>
const route = useRoute()
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`);
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <header class="text-center my-4">
          <h3>{{ product.title }}</h3>
          <hr>
        </header>
        <main>
          <div class="card mb-4">
            <img :src="product.image" class="card-img-top img-fluid rounded-start w-25 mx-auto" :alt="product.title">
            <div class="card-body">
              <h5 class="card-title">Product Details</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text"><strong>Price:</strong> ${{ product.price }}</p>
              <div class="text-center">
                <button class="btn btn-success me-2">Buy Now</button>
                <button class="btn btn-outline-success">Add to WishList</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
