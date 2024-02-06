<!--This component serves to display greeting message.-->
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1> <!--This line will display message, and the content is dynamically bound to the 'msg' property from HomeView.vue component-->
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<script>
export default {
  //define props that this component accepts
  props: {
  msg: {
    type: String, //require props data type is string
    required: true //which mean we have to provide value for the 'msg' props
  }
},
}
</script>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
