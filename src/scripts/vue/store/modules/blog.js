const blog = {
    /* хранения данных */
    state: {
        /* объект для хранения данных */
        data: [],
        /* для кнопки добавить */
        change: true
    },
    /* getter для обращения к стейту, а не на прямую, запрос данных */
    getters: {
        blog(state) {
            return state.data;
        },

        /* для кнопки добавить */
        isBlogChanged(state) {
            return state.change;
        }
    },
    mutations: {
        addNewArticle(state, article) {
            state.data.push(article);
            console.log('В хранилище сейчас следующие статьи', state.data);
        },
        removeArticleFromStore(state, id) {
            state.data = state.data.filter(skill => skill.id !== id)
        },

    },
    /* действия с данными */
    actions: {
        /* подтянуть скилы(с сервера) */

        /* деструктуризация */
        /* приходит этот же объект skills, только выбираются два метода */
        fetchArticles({ state, rootGetters }) {
            const { $http } = rootGetters; // тоже, что и rootGetters.$http. поскольку в rootGetters 1 объект .$http

            /* относительный путь не сработал '../../' */
            /* отправляем запрос методом get на указанный url */
            /* тело ответа кладем в хранилище state */
            /* метод вызывает компонент skill-list */
            $http.get('/src/components/Blog/data.json')
                .then(response => {
                    state.data = response.body;
                }, error => {
                    console.error(error);
                })
                //ajax
        }
    }
}



export default blog;