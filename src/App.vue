<template>
  <main id="main">
    <Nav/>
    <transition name="animate" enter-active-class="animated fadeIn" leave-active-class="animate__delay-2s" mode="out-in">
      <router-view/>
    </transition>
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </main>
</template>

<script>
import Nav from "@/components/Nav"

export default {
  components: {
    Nav
  }
}
</script>
<style lang="scss">
#main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
