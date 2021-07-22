<template>
  <div>
    <Hero>
      <h1 slot="page-name">
        About Us
      </h1>
    </Hero>
    <section id="about">
      <div class="container text-start">
        <p>
          <strong>MAS Company (SL) Limited</strong> is a Sierra Leone Based Company that started official business in
          Sierra Leone under the companies Act, CAP 249 of Sierra Leone in 2010. Our Company has the
          vision of becoming the number one regional commercial company in Africa driven by a business
          philosophy with a culture of service excellence, integrity and adherence to due process, safety,
          health, quality and environmental standards.
        </p>
        <p>
          MAS Company (SL) Limited has successfully executed several contracts for reputable organizations such as WORLD VISION, UNICEF, VIMETCO, IFAD, IFRC/RED CROSS
          SOCIETY, GOAL, UNICEF, CRS, NACSA, FREETOWN CITY COUNCIL, BONTHE DISTRICT
          COUNCIL, KENEMA DISTRICT COUNCIL, EDSA, SLEWRC, SLRA, EGTC, CHILDFUND,
          OXFAM etc. 
        </p>
        <p>
          We pride ourselves in offering our customers exceptional services that are safe, secure, timely
          and cost effective. We own a variety of tools and equipment needed in carrying out the different
          services we provide. We also have an equipment lease agreement for various earth moving,
          tarmac work etc., with Pavi Fort Sierra Leone, which further boosts our capacity to deliver on
          our when executing our contracts. 
        </p>
        <div class="text-center" style="margin-top: 4rem">
          <h3 class="fw-bold">Company Registration</h3>
          <p class="mb-4">
            MINISTRY OF WORKS – <strong>PREMIER CLASS</strong><br>
            NATIONAL WATER RESOURCE MANAGEMENT AGENCY (DRILLING)– <strong>CLASS B</strong><br>
            SIERRA LEONE ROADS AUTHORITY – <strong>CLASS A</strong><br>
            SIERRA LEONE ELECTRICITY AND WATER REGULATORY AUTHORITY LICENSE
          </p>
          <h3 class="fw-bold">Our Vision</h3>
          <p class="mb-4">Our vision is to serve our customers as a one-stop shop for all their needs. </p>
          <h3 class="fw-bold">Our Mission Statement</h3>
          <p class="mb-4">
            With passion, we deliver superior value to our customers by providing high quality, professional
            and innovative services at a competitive rate.
          </p>
          <h3 class="fw-bold">Our Values</h3>
          <ul>
            <li>Business Focus</li>
            <li>Passion for Delivery</li>
            <li>Forward Looking</li>
            <li>Winning</li>
            <li>Integrity</li>
          </ul>
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
    document.title = "About | MAS Company SL Ltd.";
  },
}
</script>

<style scoped>
#hero {
  background-image: url("./../assets/img/hero/about-hero.jpg");
}
</style>
