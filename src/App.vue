<script setup>
  import { computed, computed} from 'vue'

  const contador1 = ref(0)
  const contador2 = ref(0)
  const valorBooleano = ref(true)

  function incrementar(){
    eval(contador).value++
  }

  function decrementar(){
    if (contador.value > 0){
      contador.value--;
    }
  }

  function reiniciar(){
    contador.value = 0;
  }

  function inverterTextoEmMaiusculo(texto){
    return texto.split('').reverse().join('').toUpperCase()
  }

</script>

<template>
  <h1>
    correção dos exercicios
  </h1>

  <div class="info">
    <h2>
      informações
    </h2>
    <p>Nome: {{  nome  }}</p>
    <p>Idade: {{ idade }} anos</p>
    <hr>
    <p>
      Para completar 50 anos faltam: {{ 50 - idade }} anos
    </p>

    <p>
      O nome invertido em maisculo é: {{ inverterTextoEmMaiusculo(nome) }}
    </p>
  </div>

</template>

