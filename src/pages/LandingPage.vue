<template>
    <section>
           <base-card>
            <h2>Whats something you wish you had learned earlier? What piece of wisdom can you share that might help the next generation? </h2>
            <h3>The Wisdom Project was created to help document and share valuable knowledge and insights from users around the world.</h3>

            <div class="landing-btns">
             <base-button class="landing-btn" link :to="randomWisdomLink">Get Your Wisdom &#128161;</base-button>
             <base-button class="landing-btn" link to="/wisdoms">View All Wisdoms &#9889;</base-button>
             <img  id="hero-img" src="../assets/Creative_process_SVG.svg" width="750" height="500" alt=""> 
            </div>

              
           
             
        </base-card>
    </section>
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
.landing-btns{
    text-align: center;
}
.landing-btn{
   margin: 10px;
   background: linear-gradient(to left top, blue, red);
   
}
#hero-img{
    text-align: center;
    margin-top: 25px;
}

</style>