<template>
  <div>
    <Hero>
      <h1 slot="page-name">
        Our Services
      </h1>
    </Hero>
    <section id="about">
      <div class="container text-start">
        <p>
          <strong>MAS Company (SL) Limited</strong> is an integrated service provider. Some of the services we provide are: Construction, Drilling and WASH Services, Procurement, Transportation and Distribution, Logistics, Clearing and forwarding. Our Company has a record of delivering contracts on time
          and within budgets. At MAS, we provide end to end outstanding supply chain solutions to our customers from source to destination.
        </p>
        <div class="text-center" style="margin-top: 4rem">
          <h3 class="fw-bold">PROCUREMENT STRATEGY</h3>
          <p class="mb-4">
            We offer a personalized approach to designing a strategy for our clients, ensuring alignment with the organization`s overall goals, objectives and strategies.
          </p>
        </div>
      </div>
      
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
    document.title = "Services | MAS Company SL Ltd.";
  },
}
</script>

<style scoped>
#hero {
  background-image: url("./../assets/img/hero/services-hero.jpg");
}
</style>
