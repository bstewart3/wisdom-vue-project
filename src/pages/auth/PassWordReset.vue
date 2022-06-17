<template>
    <div>
        <base-dialog :show="!!error" title="An error occurred" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>

        <base-dialog :show="isLoading" title="Authenticating..." fixed >
            <base-spinner></base-spinner>
        </base-dialog>

        <base-dialog :show="posted" title="Reset Email Successfully Sent" fixed >
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <p>Check your inbox for your reset link. (Check your spam folder if you havent recieved a link.)</p>
            <base-button id="close-btn" @click="$router.go(-1)"><i class="fa fa-close"></i></base-button>
        </base-dialog>

        <base-card>
            <form @submit.prevent="submitForm">
                <h1>Reset Your Password</h1>
                <h2>Please enter your account email below to receive a reset link.</h2> 
                <input type="email" name="reset-email" placeholder="email" v-model.trim="email">
                <p v-if="!formIsValid">Please enter email used during signup.</p>
                <base-button>Submit</base-button>
            </form>
        </base-card>
    </div>
</template>

<script>

import BaseButton from '../../components/ui/BaseButton.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
export default {
  components: { BaseDialog, BaseSpinner, BaseButton },
    data() {
       return {
           email: '',
           formIsValid: true,
           isLoading: false,
           error: null,
           posted: false
       } 
    },

    methods: {
       async submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@')) {
              this.formIsValid = false;
              return;
            }

            this.isLoading = true;

            const actionPayload = {
                  email: this.email,     
            };

            try{
             
               await this.$store.dispatch('reset', actionPayload) 
            //    const redirectUrl = '/' + (this.$route.query.redirect || 'wisdoms')
               this.posted = true
           

            } catch (err) {
                this.error = err.message || 'Failed to authnticate, try again later'
            }
           
            this.isLoading = false;
        },

        handleError() {
            this.error = null;
        }
    }
}
</script>

<style scoped>
    form {
    margin: 1rem;
    padding: 1rem;
    }

    .form-control {
    margin: 0.5rem 0;
    }

    label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    }

    input,
    textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
    }

    input:focus,
    textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
    }

</style>