<script setup>
  import Card from './components/Card.vue'

</script>

<template>
  <div>
    <Card>
      <p>Body</p>
      <template #header>
        <h1>Header</h1>
      </template>
      <template #footer>
        <p>Footer</p>
      </template>
    </Card>
  </div>
</template>