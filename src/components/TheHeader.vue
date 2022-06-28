<template>
    <div class="container">

        <div class="input-group mb-3 mt-3 w-25">
            <input type="text" class="form-control" placeholder="Cerca il tuo film" v-model="searchText">
            <button class="btn btn-outline-secondary" id="button-addon2" @click="onSearch()">Cerca</button>
        </div>

    </div>
</template>

<script>
import { searchMovie } from '../store.js'

export default {
    name: 'TheHeader',
    data() {
        return {
            searchText: '',
        }
    },
    methods: {
        onSearch() {
            searchMovie(this.searchText)
        }
    },
}
</script>

<style lang="scss" scoped>
    input {
        background-color: lightgrey;
        color: black;
    }
</style>