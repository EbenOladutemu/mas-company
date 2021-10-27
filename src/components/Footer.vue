<template>
  <footer class="footer">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1717579170127!2d-13.232232285217261!3d8.482674493901001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c343f123b88b%3A0xaee258c4de6ad1c4!2sMAS%20Company%20(SL)%20Limited!5e0!3m2!1sen!2ssl!4v1635364158064!5m2!1sen!2ssl" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <div>
      <p>Copyright {{ year }} MAS Company (SL) Limited. All rights reserved.</p>
      <p>Crafted by 
        <a href="http://eben.com.ng" target="_blank" rel="noopener noreferrer" title="Eben Web Krafts">
          Eben
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
iframe {
  width: 100%;
  height: 70vh;
  margin-bottom: 2rem;
  box-shadow: 0px 2px 3px 0px rgb(141 206 255 / 55%);
}
a:hover {
  color: #1873ad;
}
</style>