<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Chat App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sign-up" v-if="!isLoggedIn">Sign Up</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
          <span class="navbar-text">
            Hello, {{displayName}} <span v-if="isLoggedIn"> | <a href="javascript:;" @click="logout">Logout</a></span>
          </span>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import fb from "@/firebase/init"
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      isLoggedIn: "isLoggedIn",
      displayName: "displayName",
    })
  },
  methods: {
    logout: function () {
      fb.auth().signOut().then(() => {
        this.$store.dispatch("fetchUser", null);
         this.$router.replace('/');
      });
    }
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar .nav-item{

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}

</style>
