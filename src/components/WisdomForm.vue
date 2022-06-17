<template>
     <form @submit.prevent="submitForm">
          <div class="form-control" :class="{invalid: !title.isValid}">
            <label for="title">Title</label>
            <input type="text" id="title" v-model.trim="title.val" @blur="clearValidity('title')">
            <p v-if="!title.isValid">Your Wisdom needs a title.</p>
          </div>
             
          <div class="form-control" :class="{invalid: !description.isValid}">
            <label>Description</label>
            <textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')" ></textarea>
            <p v-if="!description.isValid">Your Wisdom needs some text.</p>   
          </div>
          
          <div class="form-control" :class="{invalid: !category.isValid}" >
            <h3>Category</h3>
            <div>
              <input type="radio" id="knowledge" value="knowledge" v-model="category.val" @blur="clearValidity('category')" >
              <label for="knowledge">Knowledge</label>
            </div>
            <div>
              <input type="radio" id="learning" value="learning" v-model="category.val" @blur="clearValidity('category')" >
              <label for="learning">Learning</label>
            </div>
            <div>
              <input type="radio" id="experience" value="experience" v-model="category.val" @blur="clearValidity('category')" >
              <label for="experience">Experience</label>
            </div> 
            <p v-if="!category.isValid">Please choose at least one category for your Wisdom</p>                                 
          </div>    
          <p v-if="!formIsValid">Please fix the errors above and try again.</p>
        <base-button>Submit</base-button>
      </form> 
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            title: {
              val: '',
              isValid: true
            },
            category: {
              val: [],
              isValid: true
            },
            description: {
              val: '',
              isValid: true
            },
            formIsValid: true

        };
    },
    methods: {
        clearValidity(input){
          this[input].isValid = true
        },
        validateForm() {
          this.formIsValid = true;
          if (this.title.val === '') {
            this.title.isValid = false;
            this.formIsValid = false;
          }
          if (this.category.val.length === 0) {
            this.category.isValid = false;
            this.formIsValid = false;
          }
          if (this.description.val === '') {
            this.description.isValid = false;
            this.formIsValid = false;
          }
              

        },
        submitForm() {
          this.validateForm();
          
          if(!this.formIsValid){ 
            return;
          }
           const formData = {
               title: this.title.val,
               category: [this.category.val],
               desc: this.description.val,
               
               
           };

         this.$emit('save-data', formData)
         this.$router.push('/wisdoms');
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

    input[type='radio'] + label {
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
    border-color: #146ac6;
    }

    input[type='radio'] {
    display: inline;
    width: auto;
    border: none;
    }

    /* input[type='radio']:focus {
    outline: #3d008d solid 1px;
    } */

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