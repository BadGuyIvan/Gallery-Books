import movies from "../data/movies.json";

const moviesReducers = (state=movies, action) => {
    switch(action.type){
        default :
            return state;
    }
}

export default moviesReducers;
