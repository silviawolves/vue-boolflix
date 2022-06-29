<template>
    <div class="container">
        <div class="my-card">
            <div class="card-title m-0 p-0">
                <h4 class="m-0">{{ titoloFilm }}</h4>
                <small>{{ titoloOriginale }}</small>
            </div>
            <div class="card-body pb-3 pt-0 ps-0">
                <div class="text-uppercase">Lingua originale: {{ linguaOriginale }}</div>
                <div class="text-uppercase">Voto medio: {{ votoMedio }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        titoloFilm: String,
        titoloOriginale: String,
        linguaOriginale: String,
        votoMedio: Number,
    }
}
</script>

<style>

</style>