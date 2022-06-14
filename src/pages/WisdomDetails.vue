<template>
    <div>
    <base-card>
       <section>
           <base-button id="close-btn" link :to="goBack"><i class="fa fa-close"></i></base-button>     
           <base-card>
            <h1>{{ title }}</h1>
           </base-card>
       </section>
       <section>
           <base-card>
            <h4>Posted: {{ posted }}</h4>
             <base-badge v-for="category in category" :key="category" :type="category" :title="category"></base-badge>
             <p>{{ desc }}</p> 
           </base-card>  
       </section>
    </base-card>
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
           return '/wisdoms';
       },
       category() {
           return this.selectedWisdom.category
       },
       title() {
           return this.selectedWisdom.title
       },
       desc() {
           return this.selectedWisdom.desc
       },
       posted() {
           return this.selectedWisdom.posted
       }
   },
   created() {
       this.selectedWisdom = this.$store.getters['wisdoms/wisdoms'].find(
           (wisdom) => wisdom.id === this.id
        );
   }
}
</script>
<style scoped>
#close-btn{
   
   
}
</style>