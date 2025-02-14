const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h2>You are Vue Master already!</h2>',
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