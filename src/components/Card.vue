<script setup>

</script>

<template>

    <div class="card">
        <div v-if = "$slots.header" class = "header">
            <slot name = "header" />
        </div>

        <div class="body">
            <slot>
                <p>Conteúdo padrão do card</p>
            </slot>
        </div>
    </div>

    <div v-if = "$slots.footer" class="footer">
        <slot name="footer" />
    </div>
    
</template>

<style scoped>
    .card {
        padding: 20px;
        border: 1px solid gray;
        border-radius: 5px;
        box-shadow: 3px 3px 2px 2px gray;
    }

    .header {
        background-color: lightgray;
        padding: 10px;
        border-radius: 5px 5px  0 0;
    }

    .body {
        padding: 10px;
    }

    .footer {
        background-color: lightgray;
        padding: 10px;
        border-radius: 0 0 5px 5px;
    }
</style>
