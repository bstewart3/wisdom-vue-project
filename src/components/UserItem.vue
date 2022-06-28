<template>
    <section>
      <base-card>
      <div>
        <h2>{{ title }}</h2>
         <div>
          <base-badge  v-for="category in category" :key="category" :type="category" :title="category"></base-badge>
         </div>
         <h4>Posted: {{ date }}</h4>
        <h4>{{ desc }}</h4>
      </div>
  
        <div class="actions">
          <base-button @click="showEditDialog">Edit</base-button>
          <base-button @click="showDeleteDialog">Delete</base-button>
        </div>

        <base-dialog :show="!!error" title="An error occured!" @close="handleError">
          <p>{{ error }}</p>
        </base-dialog>

        <base-dialog fixed :show="this.delete" title="Delete your post">
          <h3>Are you sure you want to delete your wisodm?</h3>
          <base-button :id="this.id" @click="deleteWisdom">Confirm</base-button>
          <base-button @click="closeDeleteDialog">Close</base-button>
        </base-dialog>

       <base-dialog :show="edit" title="Edit your post" fixed >
         <wisdom-form @save-data="saveEditedData" :id="this.id" ></wisdom-form>
         <base-button @click="closeEditDialog">Close</base-button>
       </base-dialog>
      
      </base-card>
    </section>
</template>


<script>
import BaseBadge from './ui/BaseBadge.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseDialog from './ui/BaseDialog.vue';
import WisdomForm from './WisdomForm.vue'

export default {

  data(){
    return {
      edit: false,
      delete: false,
      error: null,
      isDeleted: false
      
      
    }
  },
  methods: {
    async saveEditedData(data) {
        this.isLoading = true;
        try {
          await this.$store.dispatch('wisdoms/editWisdom', data);
          this.$router.push('/userWisdoms');      
          
        } catch(error) {
          this.error = error.message || 'Something went wrong';
        }
        this.isLoading = false;
      },
  
   async deleteWisdom() {
       
    await this.$store.dispatch('wisdoms/deleteWisdom', this.id);
    this.$router.go(0)
   },
 
  showEditDialog() {
   return this.edit = true
  },
  closeEditDialog() {
    return this.edit = false
  },
  showDeleteDialog() {
   return this.delete = true
  },
  closeDeleteDialog() {
    return this.delete = false
  },
  handleError() {
    this.error = null;
  },
 
  },
  components: { BaseButton, BaseBadge, BaseDialog ,WisdomForm},
    props: ['id', 'title', 'category', 'desc','date'],
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