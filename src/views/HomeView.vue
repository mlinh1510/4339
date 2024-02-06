<!--This is home view page, it will display information when user click 'Home' on the navigation bar-->
<template>
  <main>
    <div class="wrapper">
      <!--Render message here-->
      <HelloWorld msg ="You did it!" /> 
    </div>
  </main>
</template>

<script>
// import child components
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // register child component
  components: {
    HelloWorld //We care calling properties from another component here so I can render it on template
  },

  //In here, we want to return a mesage for the component
  data() {
    return {
      msg : "You did it!" //define a variable
    }
  }
}
</script>

<style>
/* default styling */
@import "../assets/base.css";
</style>
