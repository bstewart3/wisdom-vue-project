<template>
  <div>
    <base-card>
      <h1> Your Wisdoms:</h1>
        <user-item v-for="wisdom in userWisdoms.reverse()" :key="wisdom.id"  :userId="wisdom.userId" :id="wisdom.id" :title="wisdom.title" :category="wisdom.category" :desc="wisdom.desc" :date="wisdom.posted"></user-item>
        <h3 v-if="userWisdoms <= 0">You have no wisdoms posted..Try adding your own Wisdoms  <router-link to="/addWisdom">here</router-link>.</h3>
    </base-card>
  </div>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue';
import UserItem from '../components/UserItem.vue';
export default {
    
      created() {
    this.$store.dispatch('wisdoms/loadWisdoms')
  },
    components: {
        UserItem,
        BaseCard
    },
    computed: {
        userWisdoms() {
           const wisdoms = this.$store.getters['wisdoms/wisdoms'];
           const userId = localStorage.getItem('userId');
           const userWisdoms = wisdoms.filter( (wisdom) => wisdom.userId === userId );
           
          console.log(userWisdoms)
        return userWisdoms
       },
    }
     
}
</script>

<style>

</style>