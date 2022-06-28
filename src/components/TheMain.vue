<template>
    <div class="container">

        <div class="movie-list">
            <ul class="list-unstyled">
                <li v-for="(film, i) in fetchMovie" :key="i">{{ film.title }}</li>
            </ul>
        </div>

        <div class="series-list">
            <ul class="list-unstyled">
                <li></li>
            </ul>
        </div>

    </div>
</template>

<script>
import { state } from '../store.js'

export default {
    name: 'TheMain',
    computed: {
        fetchMovie() {
            return state.movieList
        }
    }
}
</script>

<style lang="scss" scoped>

</style>