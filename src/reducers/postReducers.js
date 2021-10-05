
const initialPosts = {
    items: [],
    loading: false,
    error: null
};

const postReducers = (state = initialPosts, action) => {
    switch (action.type) {
        case "FETCH_POST_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                loading:false,
                items: action.payload
            }
        case "FETCH_POST_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default postReducers












