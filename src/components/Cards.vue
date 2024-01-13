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


//#custom-cards.px-4.py-5.bg-light
    .container
        .row.row-cols-1.row-cols-lg-3.align-items-stretch.g-4.py-5
            .col
                .bouquete.card.card-cover.h-100.overflow-hidden.text-bg-dark.rounded-4.shadow
                    .d-flex.flex-column.h-100.p-0.text-white.justify-content-center
                        h3.p-5.display-6.lh-1.fw-bold.text-shadow Los detalles de la boda

            .col
                .place.card.card-cover.h-100.overflow-hidden.text-bg-dark.rounded-4.shadow
                    .d-flex.flex-column.h-100.p-0.text-white
                        h3.p-5.mt-5.mb-4.display-6.lh-1.fw-bold.text-shadow 7910 S. Vineland road Bakersfield, CA 93307
                        ul.d-flex.list-unstyled.mt-auto.bg-dark.bg-opacity-75.p-2.mb-0
                            li.me-auto
                            li.d-flex.align-items-center.me-3
                                a.btn.btn-primary(href="https://maps.app.goo.gl/WQAiyt2yX87Z1ETo9" target="_blank") Ver en Google Maps

            .col
                .date.card.card-cover.h-100.overflow-hidden.text-bg-dark.rounded-4.shadow
                    .d-flex.flex-column.h-100.p-0.text-white
                        h3.p-5.mt-5.mb-4.display-6.lh-1.fw-bold.text-shadow Sábado 16 de Marzo.<br>1:00pm
                        ul.d-flex.list-unstyled.mt-auto.bg-dark.bg-opacity-75.p-2.mb-0
                            li.me-auto
                            li.d-flex.align-items-center.me-3
                                a.btn.btn-primary(href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:Boda%20de%20Daisy%20%26%20Kevin%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20240316T200000Z%0D%0ADTEND:20240317T030000Z%0D%0ADTSTAMP:20240109T012557Z%0D%0ASUMMARY:Boda%20de%20Daisy%20%26%20Kevin%0D%0ALOCATION:%207910%20S.%20Vineland%20road%20Bakersfield%2C%20CA%2093307%0D%0AUID:30262%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A") Agregar al calendario


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