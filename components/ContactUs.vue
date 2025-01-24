<template>
    <div>
      <div class="py-5 bg-light">
        <div class="container">
          <div class="row align-items-center text-center">
            <!-- Query Message -->
            <div class="col-md-8 mb-3 mb-md-0">
              <h4 class="text-primary">If you have any queries, please contact us</h4>
              <p class="mb-0">
                Reach out to us at 
                <NuxtLink to="/contact" class="text-decoration-none text-danger">
                  contact@email.com
                </NuxtLink>
              </p>
            </div>
            <!-- Contact Button -->

            <div class="col-md-4">
              <NuxtLink to="/contact">
                <button class="btn btn-danger px-4 py-2">Contact Us</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>  