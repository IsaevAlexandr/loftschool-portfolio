const skills = {
    /* хранения данных */
    state: {
        /* объект для хранения данных */
        data: [],
        /* для кнопки добавить */
        change: true
    },
    /* getter для обращения к стейту, а не на прямую, запрос данных */
    getters: {
        skills(state) {
            return state.data;
        },

        /* для кнопки добавить */
        isSkillChanged(state) {
            return state.change;
        }
    },
    mutations: {
        addNewSkill(state, skill) {
            state.data.push(skill);
            state.change = false;
        },
        removeSkillFromStore(state, id) {
            state.data = state.data.filter(skill => skill.id !== id)
            state.change = false;
        },
        changeStateStatus(state) {
            state.change = true;
        }
    },
    /* действия с данными */
    actions: {
        /* подтянуть скилы(с сервера) */

        /* деструктуризация */
        /* приходит этот же объект skills, только выбираются два метода */
        fetchSkills({ state, rootGetters }) {
            const { $http } = rootGetters; // тоже, что и rootGetters.$http. поскольку в rootGetters 1 объект .$http

            /* относительный путь не сработал '../../' */
            /* отправляем запрос методом get на указанный url */
            /* тело ответа кладем в хранилище state */
            /* метод вызывает компонент skill-list */
            $http.get('json/data.json')
                .then(response => {
                    state.data = response.body;
                }, error => {
                    console.error(error);
                })
                // $http.get('/dist/data.json')
                //     .then(response => {
                //         state.data = response.body;
                //     }, error => {
                //         console.error(error);
                //     })
                //ajax
        }
    }
}



export default skills