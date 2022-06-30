<template>
    <div class="header">
        
        <div class="container">
            <div class="logo">
                <img src="public/img/netflix-logo.svg" alt="Logo Boolflix">
            </div>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Cerca il tuo film" v-model="state.searchText">
                <button class="btn btn-outline-secondary" id="button-addon2" @click="onSearch()">Cerca</button>
            </div>
        </div>

    </div>
</template>

<script>
import { fetchLists, state } from '../store.js'

export default {
    name: 'TheHeader',
    data() {
        return {
        }
    },
    methods: {
        onSearch() {
            fetchLists('tv')
            fetchLists('movie')
        }
    },
    computed: {
        state() {
            return state
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        flex-shrink: 0;
        padding: 1rem;
        display: flex;

        input {
            background-color: lightgrey;
            color: black;
        }
    }
    
</style>