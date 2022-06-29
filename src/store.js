import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({
    movieList: [],
    seriesList: [],
    searchText: '',
})

export function fetchLists(type) {
    axios.get('https://api.themoviedb.org/3/search/' + type, {
        params: {
            api_key: '542c8a1720766f80e837abdc7ea3e8d2',
            language: 'it-IT',
            query: state.searchText,
        }
    }).then((result) => {
        if (type === 'tv') {
            state.seriesList = result.data.results
        } else {
        state.movieList = result.data.results }
    })
}