<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    'app-navbar' : Navbar
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>