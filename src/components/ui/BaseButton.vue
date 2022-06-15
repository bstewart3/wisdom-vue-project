<template>
 <div>
    <button v-if="!link">
      <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
      <slot></slot>   
    </router-link>
 </div>
</template>

<script>
export default {
  props: {
      mode: {
          type: String,
          required: false,
          default: null
      },
      link: {
        type: Boolean,
        required: false,
        default: false 
      },
      to: {
        type: String,
        required: false,
        default: '/'  
      }
  }  
}
</script>

<style scoped>
    template{
      display: inline-block;
    }
    div{
      display: inline-block;
    }

    button,
    a {
      align-items: center;
      background-color: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.188);
      border-radius: .25rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      display: inline-block;
      font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      line-height: 1.25;
      margin: 0;
      min-height: 3rem;
      padding: calc(.875rem - 1px) calc(1.5rem - 1px);
      position: relative;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: top;
      width: auto;
    }

    a:hover,
    a:active,
    button:hover,
    button:active {
    background-color: #f7f5f5c3;
    border-color: #270041;
    }

    .flat {
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: none;
    }
    .cta{
      background-color: rgb(66, 66, 66);
      color: #FFFFFF;
      border-radius: 10rem;
    }
    .cta:hover {
      background-color: #3ca8d6;
    }


    .outline {
    font-size: 14px;
    font-weight: 500;
    background-color: transparent;
    border-color: #270041;
    display: inline;
    border-width: 100px;
    border: 1px solid rgba(0, 0, 0, 0.637);
    color: #270041;
    }

    .flat:hover,
    .flat:active,
    .outline:hover,
    .outline:active {
    background-color: transparent;
    color: #ffffff;
    }
</style>