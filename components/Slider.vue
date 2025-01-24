<script setup>
const route = useRoute()
const { data:product, pending, error, refresh } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`);
</script>

<template>
    <div>
      <div class="container text-center py-5 border border-5 my-2">
        <div class="row align-items-center">
          <!-- Right Column -->
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide w-50 mx-auto"
              data-bs-ride="carousel"
            >
              <!-- Carousel Indicators -->
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
  
              <!-- Carousel Images -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                    class="d-block w-25 h-50 mx-auto rounded"
                    alt="Slider 1"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    class="d-block w-25 h-50 mx-auto rounded"
                    alt="Slider 2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
                    class="d-block w-25 h-50 mx-auto rounded"
                    alt="Slider 3"
                  />
                </div>
              </div>
  
              <!-- Carousel Controls -->
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon  btn"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon btn"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style>
.btn{
  background-color: black;
}
.btn:hover{
  color: black;
  background-color: black;
}
</style>
  