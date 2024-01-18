<script setup lang="ts">
import placeImg from "../assets/image/place.webp"
import dateImg from "../assets/image/date.webp"
import bouquete from "../assets/image/bouquet.webp"
import { OhVueIcon } from "oh-vue-icons";


const placeCardBg = `url(${placeImg})`
const dateCardBg = `url(${dateImg})`
const bouqueteCardBg = `url(${bouquete})`

defineProps<{ place: { title: string, button: string }, time: { title: string, button: string } }>()
</script>
<template lang="pug">

.container.mb-5
    .row.align-items-md-stretch
        .col-md-6.m-2.m-md-0
            .h-100.p-5.rounded-3.place
                h3.p-5.mt-5.mb-4.display-6.lh-1.fw-bold.text-shadow.text-white {{ place.title }}
                a.btn.btn-secondary.text-white.btn-shadow(target="_blank" href="https://maps.app.goo.gl/hPpmj8NC472HkB4v5") 
                    | {{ place.button }}

        .col-md-6.m-2.m-md-0
            .h-100.p-5.rounded-3.date
                h3.p-5.mt-5.mb-4.display-6.lh-1.fw-bold.text-shadow.text-white {{ time.title }}
                a.btn.btn-success.btn-shadow(href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:Boda%3A%20Daisy%20%26%20Kevin%20%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20240316T200000Z%0D%0ADTEND:20240317T030000Z%0D%0ADTSTAMP:20240118T015504Z%0D%0ASUMMARY:Boda%3A%20Daisy%20%26%20Kevin%20%0D%0ALOCATION:7910%20S%20Vineland%20Rd%2C%20Bakersfield%2C%20CA%2093307%0D%0AUID:47540%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A")
                    | {{ time.button }}
                

</template>

<style scoped lang="scss">
.place {
    background-image: v-bind("placeCardBg");
    background-repeat: no-repeat;
    background-size: cover;
}

.date {
    background-image: v-bind("dateCardBg");
    background-repeat: no-repeat;
    background-size: cover;
}

.bouquete.card {
    background-image: v-bind("bouqueteCardBg");
    background-repeat: no-repeat;
    background-size: cover;
}

.bg-purple {
    background: #6f42c1
}

.text-shadow {
    text-shadow: 2px 2px 10px black;
}

.btn-shadow {
    box-shadow: 2px 2px 10px rgb(0, 0, 0)
}
</style>