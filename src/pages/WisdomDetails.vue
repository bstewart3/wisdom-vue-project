<template>
    <div>
       <section>
           <base-button link :to="goBack">Back</base-button>
           <base-card>
            <h2>{{ title }}</h2>
           </base-card>
       </section>
       <section>
           <base-card>
             <base-badge v-for="category in category" :key="category" :type="category" :title="category"></base-badge>
             <p>{{ desc }}</p> 

           </base-card>  
       </section>
    </div>
</template>


<script>

export default {
  
   props: ['id'],
   data() {
       return {
         selectedWisdom: null  
       };
   },
   computed: {
       goBack() {
           return this.$route.back;
       },
       category() {
           return this.selectedWisdom.category
       },
       title() {
           return this.selectedWisdom.title
       },
       desc() {
           return this.selectedWisdom.desc
       }
   },
   created() {
       this.selectedWisdom = this.$store.getters['wisdoms/wisdoms'].find(
           (wisdom) => wisdom.id === this.id
        );
   }
}
</script>