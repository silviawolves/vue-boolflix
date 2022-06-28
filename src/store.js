import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({
    movieList: [],
    seriesList: [],
})

export function searchMovie(searchText) {
    axios.get('https://api.themoviedb.org/3/search/movie/', {
        params: {
            api_key: '542c8a1720766f80e837abdc7ea3e8d2',
            query: searchText,
            language: 'it-IT',
        }
    }).then((result) => {
        state.movieList = result.data.results
    })
}