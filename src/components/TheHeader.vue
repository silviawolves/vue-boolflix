<template>
    <div class="header">
        <div class="container">

            <!--navigation bar, search bar-->
            <div class="d-flex justify-content-between align-items-center">
                <div class="logo">
                    <img src="../assets/img/netflix-logo.svg" alt="Logo Boolflix">
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Cerca il tuo film" v-model="state.searchText">
                    <button class="btn btn-outline-secondary" id="button-addon2" @click="onSearch()">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
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

        .logo img {
            height: 20px;
        }

        .input-group {
            width: auto;
        
            input {
                height: 25px;
                background-color: lightgrey;
                color: black;
                vertical-align: middle;
            }

            button {
                height: 25px;
                padding-top: 0;

                i {
                    color: white;
                }
            }
        }
    }
    
</style>