<!--This page serve as the root component for the application because
it defines layout and structure. -->

<template>
  <div>
  <!-- Nav bar for the application -->
  <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left" href="/">CIS 4339 Midterm</a>
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink> <!--Vue Router directive using <RouterLink> to link to a specific router-->
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/form">Form</RouterLink>
          </li>
        </ul>
      </div>
    </nav>

  <!-- Router view -->
  <div class="container mt-5">
        <RouterView />
      </div>
    </div>
</template>

<script>
//render the content of the current route
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import "./assets/base.css";

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
