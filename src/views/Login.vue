<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="login" class="text-center">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Email" name="email" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" name="password" v-model="password">
          </div>
          <p v-if="errorText" class="text-danger">{{ errorText }}</p>

          <button class="btn btn-primary">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import fb from "@/firebase/init"
export default {
  name: 'home',
  data () {
    return {
      email: "",
      password:"",
      errorText: null
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        fb
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.$store.dispatch("fetchUser", data.user);
            this.$router.replace('/chat');
          })
          .catch(err => {
            this.errorText = err.message;
          });
      } else {
        this.errorText = "Please enter email and password"
      }
    }
  }
}
</script>

<style>
.login{
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>