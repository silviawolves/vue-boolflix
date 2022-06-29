<template>
    <div class="container">

        <div class="row">
            <div class="col-2" v-for="(movie, i) in fetchMovie" :key="i">
                <MovieCard :movie="movie"></MovieCard>
            </div>

            <div class="col-2" v-for="movie in fetchSeries" :key="movie.id">
                <MovieCard :movie="movie"></MovieCard>
            </div>
        </div>

    </div>
</template>

<script>
import { state } from '../store.js'
import MovieCard from './MovieCard.vue'

export default {
    name: "TheMain",
    components: { MovieCard },
    computed: {
        fetchMovie() {
            return state.movieList;
        },
        fetchSeries(){
            return state.seriesList
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

</style>