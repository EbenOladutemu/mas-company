<template>
  <header> 
  <nav>
    <a id="logo" href="#">
      <img class="logo" src="./../assets/img/logo.png" alt="Bank3D logo" width="50">
    </a>
    <button id="menu" class="menu" aria-label="Main Menu">
      <svg width="100" height="60" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
    <div id="navContainer" class="nav-container">
      <ul id="navLinks" class="nav-links">
        <li class="toggle-menu">
          <router-link to="/">About</router-link>
        </li>
        <li class="toggle-menu">
          <router-link to="/">Benefits</router-link>
        </li>
        <li class="toggle-menu">
          <router-link to="/">Use Cases</router-link>
        </li>
        <li class="toggle-menu">
          <router-link to="/">Faq</router-link>
        </li>
        <li class="toggle-menu">
          <router-link to="/">Privacy Policy</router-link>
        </li>
        <li class="toggle-menu">
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  mounted(){
    let menu = document.getElementById('menu')
    let logo = document.getElementById('logo')
    let toggleMenu = document.querySelectorAll('.toggle-menu')
    let navLinks = document.getElementsByClassName('.toggle-menu a')
    let navContainer = document.getElementById('navContainer')


    menu.addEventListener('click', () => {
      menu.classList.toggle('opened');
      menu.setAttribute('aria-expanded', menu.classList.contains('opened'))
      navContainer.classList.toggle('h-27')
    })

    logo.addEventListener('click', () => {
      openCloseMenu();
    })

    for (let i = 0; i < toggleMenu.length; i++) {
      toggleMenu[i].addEventListener('click', () => {
        openCloseMenu();
      });
    }

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', () => {
        var current = document.getElementsByClassName('active')
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += ' active';
      });
    }

    const openCloseMenu = () => {
      menu.classList.remove('opened')
      navContainer.classList.remove('h-25')
    }
  }
}
</script>
<style>

</style>