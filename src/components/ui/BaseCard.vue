<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
  border:  1px solid rgba(0, 0, 0, 0.188); ;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.366);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 60rem;
}
</style>