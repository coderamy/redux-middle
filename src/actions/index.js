import axios from "axios"


export const fetch_posts = () => async(dispatch, getState) => {
    dispatch({
        type: "FETCH_POST_REQUEST"
    })
    
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: "FETCH_POSTS_SUCCESS",
            payload: response.data
        })
    }catch(error){
        dispatch({
            type: "FETCH_POST_FAILURE",
            error
        })
    }
    
    
    
}

// export const fetch_posts = () => {
//     return async(dispatch, getState) => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         dispatch({
//             type: "FETCH_POSTS_SUCCESS",
//             payload: response.data
//         })
//     }
// }

export const increment = () => {
    return {
        type: "INCREMENt"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}