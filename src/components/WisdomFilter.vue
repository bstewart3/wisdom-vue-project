<template>
 <div>
    <base-card>
        <h2>Find A Wisdom</h2>
      <span class="filter-option">
        <span class="filter-option">
          <input type="checkbox" id="knowledge" checked @change="setFilter">
          <label for="knowledge">Knowledge</label>   
        </span>
        <span class="filter-option">
          <input type="checkbox" id="learning" checked @change="setFilter">
          <label for="learning">Learning</label>   
        </span>
         <span class="filter-option">
          <input type="checkbox" id="experience" checked @change="setFilter">
          <label for="experience">Experience</label>
        </span>
        <span>
          <input type="text" v-model="input">
          <h3>{{ input }}</h3>
        </span>
       </span>
       
    </base-card>
 </div>
</template>

<script>

export default {
  
    emits: ['change-filter'],
    data() {
        return {
            input: '',
            randomWisdom: [],
            filters: {
                knowledge: true,
                learning: true,
                experience: true
            }
        }
    },

    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters
            this.$emit('change-filter', updatedFilters)
        },
        wisdomSearch() {
         const wisdoms = this.$store.getters['wisdoms/wisdoms'];
         const filteredWisdoms = wisdoms.filter((wisdom) =>
         wisdom.toLowerCase().includes(input.value.toLowerCase()));

         this.$store.commit('setWisdoms/wisdoms',)
          
       }

    }
}
</script>

<style scoped>
    h2 {
    margin: 0.5rem 0;
    }

    .filter-option {
    margin-right: 1rem;
    display: inline-block;
    }

    .filter-option label,
    .filter-option input {
    vertical-align: middle;
    }

    .filter-option label {
    margin-left: 0.25rem;
    }

    .filter-option.active label {
    font-weight: bold;
    }
</style>