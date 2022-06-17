<template>
    <header>
        <nav> 
            <h1 id="logo-txt"><router-link to="/home">&#128161;Wisdom </router-link></h1>
            <ul>
  
                <li><router-link to="/wisdoms">Wisdoms</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/addwisdom">Add Wisdom</router-link></li>
                <li v-else><router-link to='/auth'>Login</router-link></li>
                <li class="logout" v-if="isLoggedIn"><base-button @click="logout">Logout</base-button></li>
            </ul>
        </nav>
    </header>
</template>

<script>
// import BaseButton from '../ui/BaseButton.vue';


export default {
  // components: { BaseButton },
  methods:  {
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/wisdoms')
    } 
  },
computed: {
  isLoggedIn() {
    return this.$store.getters.isAuthenticated;
  }
}
}
</script>

<style scoped>
header {
  width: 100%;
  height: 6.5rem;
  background-color:#05445E;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}



a:active,
a:hover,
a.router-link-active {
  border: 1px solid rgb(255, 255, 255);
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
@media screen and (max-width: 570px){
header {
  padding: 10px 20px;
  flex-direction: column;
  min-width: 300px;
}
header nav {
  position: absolute;
  flex-direction: column;
  font-size: 1em;
  justify-content: center;
  min-width: 300px;
}
header nav li {
  margin: 0 -0.6rem;
  border: none;
}
a:active,
a:hover,
a.router-link-active {
  border: none;
}


}
@media screen and (max-width: 300px) {
  header nav {
  position: absolute;
  flex-direction: column;
  font-size: 1em;
  justify-content: center;
}
header nav li {
  margin: 0 -0.6rem;
  border: none;
}
}






</style>