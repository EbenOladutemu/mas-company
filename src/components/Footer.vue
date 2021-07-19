<template>
  <footer class="footer">
    <div>
      <p>Copyright {{ year }} MAS Company (SL) Limited. All rights reserved</p>
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
a:hover {
  color: #1873ad;
}
</style>