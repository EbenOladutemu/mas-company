<template>
  <div>
    <Hero/>
    <section id="get-started">
      <div class="container">
        <strong>MAS Company (SL) Limited</strong> is a Sierra Leone Based Company that started official business in
        Sierra Leone under the companies Act, CAP 249 of Sierra Leone in 2010. Our Company has the
        vision of becoming the number one regional commercial company in Africa driven by a business
        philosophy with a culture of service excellence, integrity and adherence to due process, safety,
        health, quality and environmental standards.
      </div>
      <router-link to="about">
        <button class="btn btn-primary get-started">Learn More</button>
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
