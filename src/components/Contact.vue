<template>
  <section id="contact-us">
   <div class="container">
     <h1 class="pt-4 mb-5">Contact Us</h1>
     <div class="flex-row-lg justify-between align-items-center">
       <div class="mas-social text-start">
         <p>
           <i class="fas fa-map-pin"></i>
           <span>48, Circular Road</span>
         </p>
         <p>
           <i class="fas fa-envelope"></i>
           <span><a href="mailto:mascompanysllimited@gmail.com">mascompanysllimited@gmail.com</a></span>
        </p>
         <p>
           <i class="fas fa-phone"></i>
           <span>
             <a href="tel:00232 78 082 834">00232 78 082 834</a>,
             <a href="tel:00232 79 427 272">00232 79 427 272</a>
            </span>
          </p>
         <!-- <ul>
           <li>Facebook</li>
           <li>Instagram</li>
         </ul> -->
       </div>
       <form class="mas-form">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingPassword" placeholder="Your name">
          <label for="floatingPassword">Name</label>
        </div>
         <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="Your email">
          <label for="email">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="subject" placeholder="Subject">
          <label for="subject">Subject</label>
        </div>
        <div class="form-floating mb-3">
          <textarea type="text" class="form-control" id="message" placeholder="Your message" rows="8">
          </textarea>
          <label for="message">Message</label>
        </div>
       </form>
     </div>
   </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#contact-us {
  background: #ecf5fb;
  margin: 3rem 0;
  padding: 1rem 1rem 3rem 1rem;
}
.mas-social {
  margin-top: -1rem;
  p {
    word-break: break-all;
  }
  i {
    margin-right: 4px;
  }
}
a:hover {
  color: #1873ad;
}
</style>