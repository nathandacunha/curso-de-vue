<script setup>
  import { computed, ref} from 'vue'

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
  <div class="booleano">
    <button @click="valorBooleano = !valorBooleano" > {{ valorBooleano ? 'Esconder Resultado' : 'Mostrar Resultado' }}</button>
  </div>
  <div v-if = "valorBooleano">
    <div class="contador">
      <h2>Contador 1</h2>
      <button @click = "incrementar('contador1')">Incrementar</button>
      <button @click = "decrementar('contador1')">Decrementar</button>
      <p>Valor: {{ contador1 }}</p>
    </div>
    <div class="contador">
      <h2>Contador 2</h2>
      <button @click="incrementar('contador2')">Incrementar</button>
      <button @click = "decrementar('contador2')">Decrementar</button>
      <p>Valor: </p>
    </div>
    <div class="soma">
      <h2>Soma</h2>
      <p>Valor: {{ soma }}</p>
      <div v-if = "somaMaiorQue10">
        <p>A soma é maior que que 10</p>
      </div>
    </div>
  </div>

  

</template>

