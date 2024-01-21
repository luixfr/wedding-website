<template lang="pug">
.container-fluid.px-5.bg-light
    .row.p-5.g-1
        .col-12.col-lg-6.text-left.mb-5.mb-lg-0
            h1.fw-bold.mb-lg-5 {{ title }}
            p.fs-4 {{ text }}
        .col-12.col-lg-6.text-center.d-flex.flex-column.justify-content-center.align-items-center
            img(width="300" :src="zelleQr")
            img.mt-2(width="100" :src="zelleLogo")
</template>

<script setup lang="ts">
import zelleQr from "../assets/image/zelleQr.png"
import zelleLogo from "../assets/image/zelle-logo.png"

defineProps<{ title: string, text: string }>()
</script>