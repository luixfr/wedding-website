<template lang="pug">
#text.my-5.bg-primary.bg-gradient
    .p-5.text-center
        .container.py-5
            h1.ff-vibes.text-white Nos Vamos a Casar!
            p.col-lg-8.mx-auto.fw-normal.ff-poppins.fw-bold.text-white
                | Nos complacemos en ivitarle a nuestra unión, y el intercambio de nuestros votos de amor y compromiso
            hr.h-row 
            p.col-lg-8.mx-auto.fw-normal.ff-poppins.fw-normal.text-white.my-1
                | Nuestra boda se llevara acabo sábado 16 de Marzo 2024 a la 1:00pm.
                | <br> 7910 S. Vineland road Bakersfield, CA 93307
        Countdown(labelColor="white" :deadlineDate="weddingDate" mainColor="#52796F" secondFlipColor="#52796F" mainFlipBackgroundColor="white", secondFlipBackgroundColor="white")
        a.text-dark.btn.btn-light.mt-5.btn-lg(href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:Daisy%20%26%20Kevin%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20240316T200000Z%0D%0ADTEND:20240317T031500Z%0D%0ADTSTAMP:20240108T030704Z%0D%0ASUMMARY:Daisy%20%26%20Kevin%0D%0ALOCATION:7910%20S.%20Vineland%20road%20%20Bakersfield%2C%20CA%2093307%0D%0AUID:30278%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A")
            | Add to calendar
</template>

<script setup lang="ts">
import { Countdown } from 'vue3-flip-countdown'
const weddingDate = new Date(2024, 2, 16, 12)

</script>

<style>
.h-row {
    border: 1.5px solid white;
}

.ff-vibes {
    font-size: 4em;
}

.ff-poppins {
    font-size: 1.5em;
}
</style>