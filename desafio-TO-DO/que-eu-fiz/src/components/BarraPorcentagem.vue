<template>
    <div class="barra-progresso">
        <span class="value-text">{{ this.porcentoConcluido }}%</span>
        <div :style="progressoBarra"></div>
    </div>
</template>

<script>
export default {

    props: {
        listaTarefas: Array,
        porcentoConcluido: Number
    },

    computed: {
        progressoBarra() {
            return {
                borderRadius: '6px',

                backgroundColor: this.progresso <= 20?'#D63939':'#49B356',
                width: `${this.porcentoConcluido}%`,
                height: '3vh',
            }
        },
    },

}
</script>

<style scoped>
    .barra-progresso {
        border-radius: 6px;
        border: 1px solid;
        text-align: center;

        width: 70%;
        height: 3%;

        position: relative;
    }

    .value-text {
        color: #FFFF;
        position: absolute;

        text-align: center;
        font-size: 20px;
    }
</style>