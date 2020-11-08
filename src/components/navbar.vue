<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top flex-column">
    <router-link class="navbar-brand d-flex m-auto" :to="{ name: 'Home' }">
      <div>
        <img src="../assets/name2.png" alt="" />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto text-light text-shadow">
        <li class="nav-item" :class="{ active: $route.name == 'About' }">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >About</router-link
          >
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Skills' }">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Skills</router-link
          >
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Portfolio' }">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Portfolio</router-link
          >
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Contact' }">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, resetBearer } from "../services/AxiosService";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        this.$store.dispatch("getProfile");
        // NOTE if you want to do something everytime the user logs in, do so here
      }
    },
    async logout() {
      resetBearer();
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style>
.text-shadow {
  text-shadow: 1px 1px black;
}
</style>
