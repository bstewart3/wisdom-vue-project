<template>
<div>
    <section>
        <wisdom-filter @change-filter="setFilters"></wisdom-filter>
    </section>
    <section>
     <base-card>
       <ul v-if="hasWisdoms">
           <wisdom-item v-for="wisdom in filteredWisdoms" :key="wisdom.id" :id="wisdom.id" :title="wisdom.title" :category="wisdom.category" :desc="wisdom.desc"></wisdom-item>
       </ul>
       <h3 v-else>No Wisdoms Available.. Try Again later or add you own wisdom.</h3> 
     </base-card> 
    </section>
</div>
</template>

<script>
import WisdomItem from '../components/WisdomItem.vue';
import WisdomFilter from '../components/WisdomFilter.vue'


export default {
  components: { WisdomItem, WisdomFilter },
  data() {
    return {
      activeFilters: {
        knowledge: true,
        learning: true,
        experience: true
      }
    }
  },
    computed: {
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
           return this.$store.getters['wisdoms/hasWisdoms']
       }
    },
    methods: {
      setFilters(updatedFilters) {
        this.activeFilters = updatedFilters
      }
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