<script setup>
  import Card from './components/Card.vue'

</script>

<template>
  <div>
    <Card>
      <template #header>
        <h1>Header</h1>
      </template>
      <p>Body</p>
    </Card>
  </div>
</template>