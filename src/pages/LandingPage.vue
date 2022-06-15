<template>
 <div class="wrapper">
    <div class="display-area">
        <div class="container">
         <div class="left">
             <div class="landing-txt">
              <h1>Let your insights thrive.</h1>
              <h2>Share your knowledge with tomorrow.</h2>
             </div>
              <p class="text">
                The Wisdom Project was created to help document and share valuable knowledge from users around the world.
                Anonymously share your wisdoms and add to our growing encyclopedia of user insights.
              </p>
              <div class="landing-btns">
                <base-button mode="cta" link to="/wisdoms">Try Now &#128161;</base-button>
                <base-button mode="flat" link :to="randomWisdomLink">View a Random Wisdom &#9889;</base-button>
              </div>
            </div>
            <div class="right">
              <div class="hero">
                <img  class="hero-img" src="../assets/Creative_process_SVG.svg" height="500" alt="peers gathering aroung a table with a light bulb in the center."> 
              </div> 
          </div>   
        </div>
      </div> 
  </div>  
</template>
<script>
export default {
    computed: { 
        randomWisdomLink() {
        const wisdoms = this.$store.getters['wisdoms/wisdoms'];
        var randomWisdom = wisdoms[Math.floor(Math.random()*wisdoms.length)];

        return '/wisdoms/' + randomWisdom.id ;
      }
    }
}
</script>
<style scoped>
img{
    width: 100%;
}
.container{
    position: relative;
    max-width: 81rem;
    width: 100%;
    margin: 3.5rem auto;
    padding: 0 3rem;
    z-index: 10;
}
.wrapper{
  position: fixed;
   padding: 2rem 0 2rem;
   width: 100%;
   min-height: 100vh;
   overflow: hidden;
   background: linear-gradient(#8ac9e0fe, #085c80);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   
}
.landing-btn{
   margin: 10px;
  
}
#hero-img{
    width: 123%;
    transform: translate(15%, 25px);
}
.hero{
    text-align: right;
    
}
.landing-txt{
    font-size: 1.4rem;
    color: rgb(255, 255, 255);
    text-transform: capitalize;
    line-height: 1.4;
    text-shadow: 2px 2px #0000002c;
}
.text{
    color: rgb(251, 251, 251);
    font-size: 1.1rem;
    margin: 1.9rem 0 2.5rem;
    max-width: 600px;
    line-height: 2.3;
    text-shadow: 1px 1px #0000002c;
}
.display-area .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
}
</style>