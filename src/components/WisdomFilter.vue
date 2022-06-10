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
        <base-button mode="outline" link :to="randomWisdomLink">Random Wisdom</base-button>
       </span>
       
    </base-card>
 </div>
</template>

<script>

export default {
  
    emits: ['change-filter'],
    data() {
        return {
            randomWisdom: [],
            filters: {
                knowledge: true,
                learning: true,
                experience: true
            }
        }
    },
    computed: {
        randomWisdomLink() {
        const wisdoms = this.$store.getters['wisdoms/wisdoms'];
        var randomWisdom = wisdoms[Math.floor(Math.random()*wisdoms.length)];
        return this.$route.path + '/' + randomWisdom.id;
      },
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