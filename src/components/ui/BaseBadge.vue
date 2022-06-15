<template>
    <div>
        <span class="badge" :class="type">
            {{ title }}
        </span>
    </div>
</template>

<script>
export default {
    props:['type','title']
}
</script>

<style scoped>
div{
  display: inline;
}
  .badge {
  transform: skew( -8deg,0deg); 
  background-color: #ccc;
  color: #252525;
  border-radius: 4px;
  padding: 5px;
  display: inline-block;
  margin-right: 0.5rem;
}

.knowledge {
  background-color: #68BBE3;
  color: white;
  text-shadow: 1px 1px #0000005d;
}

.learning {
  background-color: #0E86D4;
  color: white;
  text-shadow: 1px 1px #0000005d;
}

.experience {
  background-color: #055C9D;
  color: white;
  text-shadow: 1px 1px #0000005d;
}
</style>