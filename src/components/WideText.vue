<template lang="pug">
#text.my-5.bg-primary.bg-gradient
    .p-5.text-center
        .container.py-5
            h1.ff-vibes.text-white {{ title }}
            p.col-lg-8.mx-auto.fw-normal.ff-poppins.fw-bold.text-white
                | {{ invitation }}
</template>
<script setup lang="ts">
defineProps<{ title: string, invitation: string }>()
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