<template>
  <div>
    <Hero>
      <h1 slot="page-name">
        Our People
      </h1>
    </Hero>
    <section id="about">
      <div class="container text-start">
        <p>
          At MAS, we believe in our people. A team of experienced people who are committed to providing flexible, tailor made offerings that delight our customers. We keep our staffs motivated, diligent and provide you with excellent customer service at all times. We believe, <strong>Expertise + Action = Results.</strong>
        </p>
        <p class="mb-0">Our management team has standing and extensive experience in:</p>
        <ul class="ps-2">
          <li>- Business Focus</li>
          <li>- Passion for Delivery</li>
          <li>- Forward Looking</li>
          <li>- Winning</li>
          <li>- Integrity</li>
        </ul>
        <h3 class="fw-bold">Management Profile</h3>
        <p>
          The Company has a staff body of over 25 members. Our staff body comprises of Technical staff, Administrative staff and Skilled and unskilled workers. Below are the names of our Management Staff body:
        </p>
        <div class="mas-grid">
          <div class="card">
            <img src="./../assets/img/team/Mamadu-Bah.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read more</a>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/img/team/Mamadu-Bah.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read more</a>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/img/team/Mamadu-Bah.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read more</a>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/img/team/Mamadu-Bah.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read more</a>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/img/team/Mamadu-Bah.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read more</a>
            </div>
          </div>
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
    document.title = "Team | MAS Company SL Ltd.";
  },
}
</script>

<style scoped>
#hero {
  background-image: url("./../assets/img/hero/services-hero.jpg");
}
</style>
