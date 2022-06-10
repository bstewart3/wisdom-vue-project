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
  background-color: #ccc;
  color: #252525;
  
  padding: 5px;
  display: inline-block;
  margin-right: 0.5rem;
}

.knowledge {
  background-color: #3d008d;
  color: white;
}

.learning {
  background-color: #71008d;
  color: white;
}

.experience {
  background-color: #8d006e;
  color: white;
}
</style>