<script setup lang="ts">
import place from "../assets/image/place.webp"
import date from "../assets/image/date.webp"
import bouquete from "../assets/image/bouquet.webp"
import { OhVueIcon } from "oh-vue-icons";


const placeCardBg = `url(${place})`
const dateCardBg = `url(${date})`
const bouqueteCardBg = `url(${bouquete})`
</script>
<template lang="pug">

.container.mb-5
    .row.align-items-md-stretch
        .col-md-6
            .h-100.p-5.rounded-3.place
                h3.p-5.mt-5.mb-4.display-6.lh-1.fw-bold.text-shadow.text-white 7910 S. Vineland road Bakersfield, CA 93307
                button.btn.btn-secondary.text-white(type='button') Example button

        .col-md-6
            .h-100.p-5.rounded-3.date
                h3.p-5.mt-5.mb-4.display-6.lh-1.fw-bold.text-shadow.text-white Sábado 16 de Marzo.<br>1:00pm
                button.btn.btn-dark(type='button') Example button

</template>

<style scoped lang="scss">
.place {
    background-image: v-bind("placeCardBg");
}

.date {
    background-image: v-bind("dateCardBg");
}

.bouquete.card {
    background-image: v-bind("bouqueteCardBg");
}

.bg-purple {
    background: #6f42c1
}

.text-shadow {
    text-shadow: 2px 2px 10px black;
}
</style>