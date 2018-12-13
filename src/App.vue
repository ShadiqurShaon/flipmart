<template>
  <div id="app">
      <Navbar/>
      <Homepage/>
      <Footer/>
  </div>
</template>

<script>
import Navbar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import Homepage from './components/homepage/HomePage'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
    Homepage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
</style>
