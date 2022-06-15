<template>
<div>
  <base-dialog :show="!!error" title="An error occured!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
    <section>
        <wisdom-filter @change-filter="setFilters"></wisdom-filter>
    </section>
    <section>
     <base-card>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
       <base-button mode="outline" @click="loadWisdoms"><i class="fa fa-refresh"></i></base-button>
       <base-button link to="/auth?redirect=addWisdom" v-if="!isLoggedIn">Login to add a Wisdom</base-button>
       <div v-if="isLoading">
         <base-spinner></base-spinner>
       </div>
       <ul v-else-if="hasWisdoms">
           <wisdom-item v-for="wisdom in filteredWisdoms.reverse()" :key="wisdom.id" :id="wisdom.id" :title="wisdom.title" :category="wisdom.category" :desc="wisdom.desc" :date="wisdom.date"></wisdom-item>
       </ul>
       <h3 v-else>No Wisdoms Available.. Try Again later or add you own wisdom.</h3> 
     </base-card> 
    </section>
</div>
</template>

<script>
import WisdomItem from '../components/WisdomItem.vue';
import WisdomFilter from '../components/WisdomFilter.vue'
import BaseButton from '../components/ui/BaseButton.vue';
import BaseDialog from '../components/ui/BaseDialog.vue';


export default {
  components: { WisdomItem, WisdomFilter, BaseButton, BaseDialog },
  data() {
    return {
      input: '',
      isLoading: false,
      error: null,
      randomWisdom: [],
      activeFilters: {
        knowledge: true,
        learning: true,
        experience: true,
      }
    }
  },
    computed: {
      randomWisdomLink() {
        const wisdoms = this.$store.getters['wisdoms/wisdoms'];
        var randomWisdom = wisdoms[Math.floor(Math.random()*wisdoms.length)];
        return this.$route.path + '/' + randomWisdom.id;
      },
      isLoggedIn() {
        return this.$store.getters.isAuthenticated;
      },
       filteredWisdoms() {
           const wisdoms = this.$store.getters['wisdoms/wisdoms'];
           console.log(wisdoms)
           return wisdoms.filter(wisdom => {
             if(this.activeFilters.knowledge && wisdom.category.includes('knowledge')) {
               return true;
             }
             if(this.activeFilters.learning && wisdom.category.includes('learning')) {
               return true;
             }
             if(this.activeFilters.experience && wisdom.category.includes('experience')) {
               return true;
             }
             return false;
           });
       },
       hasWisdoms() {
           return !this.isLoading && this.$store.getters['wisdoms/hasWisdoms'];
       },

    },
    created() {
      this.loadWisdoms();
    },
    methods: {
      setFilters(updatedFilters) {
        this.activeFilters = updatedFilters
      },

      async loadWisdoms() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('wisdoms/loadWisdoms')
          
        } catch(error) {
          this.error = error.message || 'Something went wrong';
        }
        this.isLoading = false;
      },

       loadRandomWisdom() {
        const wisdoms = this.$store.getters['wisdoms/wisdoms'];
        var randomWisdom = wisdoms[Math.floor(Math.random()*wisdoms.length)];
         console.log(randomWisdom.id)
      },
      
      handleError() {
        this.error = null;
      },
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>