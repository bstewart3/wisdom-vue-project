<template>
    <section>
      <base-card>
      <div>
        <h3>{{ title }}</h3>
         <div>
          <base-badge v-for="category in category" :key="category" :type="category" :title="category"></base-badge>
         </div>
        <h4>{{ desc }}</h4>
      </div>
  
        <div class="actions">
          <base-button link :to="wisdomDetailsLink">View Details</base-button>
        </div>
      </base-card>
    </section>
</template>


<script>
import BaseBadge from './ui/BaseBadge.vue';
import BaseButton from './ui/BaseButton.vue';


export default {
  components: { BaseButton, BaseBadge },
    props: ['id', 'title', 'category', 'desc'],
    computed: {
      wisdomDetailsLink() {
        return this.$route.path + '/' + this.id;
      }
    }
}
</script>



<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>