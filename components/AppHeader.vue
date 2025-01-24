<template>
    <div class="sticky-top">
      <nav class="navbar navbar-expand-lg bg-white shadow-sm">
        <div class="container">
          <!-- Logo -->
          <a class="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo" class="img-fluid" style="height: 40px;">
          </a>
          <!-- Navbar Toggler -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Navbar Links -->
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link active">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link active">About</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/services" class="nav-link active">Services</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link active">Contact Us</NuxtLink>
              </li>
              <!-- Dropdown Menu -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>
   