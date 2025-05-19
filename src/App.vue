<script setup>
  import ExpandBox from './components/ExpandBox.vue'

  const title = 'Titulo da caixa expansão';
  const qtde = 2;
</script>

<template>

  <div>
    <expand-box :title = "title" :qtde = "obj.qtde" />
  </div>
</template>