<template>
  <div>
    <Hero>
      <h1 slot="page-name">
        <vue-typed-js
          :strings="['Welcome to MAS Company (SL) Limited', '']"
          :typeSpeed="100"
          :backSpeed="20"
          :loop="true"
        >
          <h1 class="typing"></h1>
        </vue-typed-js>
      </h1>
      <a slot="get-started" href="#get-started">
        <button class="btn btn-primary get-started">Get Started</button>
      </a>
    </Hero>
    <section id="get-started">
      <div class="container">
        <strong>MAS Company (SL) Limited</strong> is a Sierra Leone Based Company that started official business in
        Sierra Leone under the companies Act, CAP 249 of Sierra Leone in 2010. Our Company has the
        vision of becoming the number one regional commercial company in Africa driven by a business
        philosophy with a culture of service excellence, integrity and adherence to due process, safety,
        health, quality and environmental standards.
      </div>
      <router-link to="about">
        <button class="btn btn-primary get-started mt-4">Learn More</button>
      </router-link>
    </section>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

export default {
  name: 'Home',
  components: {
    Hero, Contact, Footer
  },
  created() {
    document.title = "Home | MAS Company SL Ltd.";
  },
}
</script>
<style>
.typed-element .typed-cursor {
  margin-top: -1rem;
}
</style>
