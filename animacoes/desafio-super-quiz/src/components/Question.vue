<template>

    <div class="question">
        
        <h5>{{ randomQuestion.text }}</h5>

        <ul class="answers">
            <li v-for="(quest, i) in randomQuestion.answers" :key="i"
                @click.prevent="selected(quest)">
                <span class="number">{{ i+1 }}</span>
                <span class="text">{{ quest.text }}</span>
            </li>
        </ul>

    </div>
    
</template>

<script>
import questions from "../util/questions.js";

export default {

    data() {
        return {
            questions: questions,
        }
    },

    computed: {
        randomQuestion() {
            return this.questions[Math.floor(Math.random() * this.questions.length)];
        },
    },

    methods: {
        selected(answer) {
            this.$emit('returnInfo', answer);
        },
    },
    
}
</script>

<style>
    .question {
        height: 400px;
        color: #000;
        background-color: #FFF;
        width: 70%;
        border-radius: 20px;
        font-size: 2.5rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    ul.answers {
        font-size: 2rem;
        padding: 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .answers li {
        margin: 20px;
        background-color: #89c454;
        border-radius: 8px;
        width: 40%;

        display: flex;
    }

    .answers .number {
        padding: 10px;
        background-color: #1e9c31;
        color: #FFF;
        flex-basis: 30px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .answers .text {
        flex: 1;
        align-self: center;
    }
</style>
