<template lang="pug">
.container-fluid.px-5.bg-light
    .row.p-5.g-1
        .col-12.col-lg-6.text-left.mb-5.mb-lg-0
            h1.fw-bold.mb-lg-5 {{ title }}
            p.fs-4 {{ text }}
        .col-12.col-lg-6.text-center
            img(width="300" src="https://generator.1qr.fr/?id=2OeS0&size=7&date=202012&cache=1")
</template>

<script setup lang="ts">
import regalosQr from "../assets/image/regalos.png"

defineProps<{ title: string, text: string }>()
</script>