<template>
     <form @submit.prevent="submitForm">
          <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" v-model.trim="title">   
          </div>
             
          <div class="form-control">
            <label>Description</label>
            <textarea id="description" rows="5" v-model.trim="description"></textarea>   
          </div>
          
          <div class="form-control">
            <h3>Category</h3>
            <div>
              <input type="checkbox" id="knowledge" value="knowledge" v-model="category">
              <label for="knowledge">Knowledge</label>
            </div>
            <div>
              <input type="checkbox" id="learning" value="learning" v-model="category">
              <label for="learning">Learning</label>
            </div>
            <div>
              <input type="checkbox" id="experience" value="experience" v-model="category">
              <label for="experience">Experience</label>
            </div>                                 
          </div>    

        <base-button>Register</base-button>
      </form> 
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            title: '',
            category: [],
            description: '',

        };
    },
    methods: {
        submitForm() {
           const formData = {
               title: this.title,
               category: this.category,
               desc: this.description,
               
           };

         this.$emit('save-data', formData)
          console.log(formData)
        }  
    }
}
</script>

<style scoped>
    .form-control {
    margin: 0.5rem 0;
    }

    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
    }

    input,
    textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    }

    input:focus,
    textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
    }

    input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
    }

    input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
    }

    h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
    }

    .invalid label {
    color: red;
    }

    .invalid input,
    .invalid textarea {
    border: 1px solid red;
    }
</style>