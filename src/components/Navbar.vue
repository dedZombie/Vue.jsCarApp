<template>
  <div>
    <nav class="nav-wrapper indigo">
        <div class="container">
            <a href="/" class="brand-logo left white-text">
                {{ msg }}
            </a>
            <a href="#" class="sidenav-trigger right" data-target="mobile-links">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="#!">About</router-link></li>
                <li><router-link to="#!">Contact</router-link></li>
                <li><router-link to="#!">Login</router-link></li>
            </ul>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="#!">About</router-link></li>
        <li><router-link to="#!">Contact</router-link></li>
        <li><router-link to="#!">Login</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
        msg: 'CarVue'
    }
  },
  methods: {
    
  }
}

$(document).ready(function(){
    $('.sidenav').sidenav();
});
</script>

<style>

</style>