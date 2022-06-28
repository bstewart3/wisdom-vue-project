<template>
    <div>
    <base-card>
       <section>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
           <base-button id="close-btn" @click="$router.go(-1)"><i class="fa fa-close"></i></base-button>     
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
        this.$store.getters['wisdoms/wisdoms'];
   }
}
</script>
