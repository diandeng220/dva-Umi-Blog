
export default {

    namespace: 'global',

    state: {
        articleList: [
            {
                title: 'express + mongoose',
                description: 'askdjfkalsdjflkajsdfjlks',
                createDate: new Date(),
                visited: 5000,
                like: 100,
                commit: 10
            },
            {
                title: 'dva + umi',
                description: 'askdjfkalsdjflkajsdfjlks',
                createDate: new Date(),
                visited: 1120,
                like: 100,
                commit: 10
            },
            {
                title: '解析dva',
                description: 'askdjfkalsdjflkajsdfjlks',
                createDate: new Date(),
                visited: 990,
                like: 100,
                commit: 10
            },
            {
                title: '解析umi',
                description: 'askdjfkalsdjflkajsdfjlks',
                createDate: new Date(),
                visited: 1120,
                like: 100,
                commit: 10
            },
            {
                title: '解析roadhog',
                description: 'askdjfkalsdjflkajsdfjlks',
                createDate: new Date(),
                visited: 990,
                like: 100,
                commit: 10
            },
            {
                title: 'this is title',
                description: 'askdjfkalsdjflkajsdfjlks',
                createDate: new Date(),
                visited: 1120,
                like: 100,
                commit: 10
            },
            {
                title: 'this is title',
                description: 'askdjfkalsdjflkajsdfjlks',
                createDate: new Date(),
                visited: 990,
                like: 100,
                commit: 10
            }
        ]
    },

    subscriptions: {
        setup({ dispatch, history, keyboard }) {
            return history.listen(({ pathname, search }) => {
                if (pathname === '/') {
                    // dispatch({
                    //     type: 'save',
                    //     payload: {
                    //         showImage: false
                    //     }
                    // });
                }
            });
        }
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({ type: 'save' });
        },
    },

    reducers: {
        setGlobalReducer(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
