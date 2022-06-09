<template>
    
        <section>
            <base-card>
             <h2>Add Your Wisdom</h2>
              <wisdom-form @save-data="saveData"></wisdom-form>
            </base-card>
        </section>
    
</template>

<script>

import WisdomForm from '../components/WisdomForm.vue';


export default {
  components: { WisdomForm },
    methods: {
     saveData(data) {
         this.$store.dispatch('wisdoms/registerWisdom', data);
        }
    }
   
}
</script>
