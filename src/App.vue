<template>
  <div id="app">
      <Navbar/>
      <Sidebar/>
      <Footer/>
  </div>
</template>

<script>
import Navbar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import Sidebar from './components/sidebar/Sidebar'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
    Sidebar
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
