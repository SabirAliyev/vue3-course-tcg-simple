const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        courseGoalResult() {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                return "Learn Vue more!"
            } else {
                return "You are Vue Master!"
            }
        }
    }
});

app.mount('#user-goal');