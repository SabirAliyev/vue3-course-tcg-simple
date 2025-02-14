const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'You are Vue Master already!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        courseGoalResult() {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');