<template>

    <div :class="['result', correct ? 'result' : 'wrong']">
        <span>{{ correct ? 'Resposta Certa! :)' : 'Resposta Errada! :(' }}</span>
        <button @click.prevent="nextQuestion()">Próxima Pergunta</button>
    </div>

</template>

<script>
export default {

    props: {
        correct: {
            type: Boolean,
            required: true,
        },
    },

    methods: {
        nextQuestion() {
            this.$emit('returnInfo', 'restart');
        },
    },

}
</script>

<style>
    .result {
        height: 400px;
        color: #000;
        background-color: #FFF;
        width: 70%;
        border-radius: 20px;
        font-size: 5.5rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #89c454;
        color: #30863d;
    }

    .result hr {
        color: #FFF;
    }

    .result.wrong {
        background-color: #f05250;
        color: #bb2814;
    }

    .result button {
        outline: none;
        align-self: center;
        padding: 10px 20px;
        font-size: 1.7rem;
        border-radius: 8px;
        background-color: #FFF;
        color: #30863d;
        font-weight: 600;
        margin-top: 5rem;
    } 

    .result.wrong button {
        color: #bb2814;
    }
</style>
