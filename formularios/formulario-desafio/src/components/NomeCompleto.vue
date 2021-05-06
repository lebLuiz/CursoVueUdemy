<template>
    <span class="style-span">
        {{ `${nome} ${sobrenome}` }}
    </span>
</template>

<script>
export default {
    props: {
        nome: String,
        sobrenome: String,
    }
}
</script>

<style prevent>
    .style-span {
        color: blue;
        font-weight: bold;
        font-family: system-ui;
        font-size: 30px;
    }
</style>