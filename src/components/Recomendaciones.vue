<template lang="pug">
.box.bg-light.py-5
    .container
        .px-4 
            h3.fw-bold {{ title }}
            p {{ subtitle }}
        .d-flex.flex-column.flex-md-row.gap-4.align-items-center.justify-content-center
            .list-group
                .list-group-item.list-group-item-action.d-flex.gap-3.py-3(v-for="recommendation in recommendations")
                    v-icon(scale="1.7" :name="recommendation.icon")
                    .d-flex.gap-2.w-100.justify-content-between
                        div
                            p.mb-0.opacity-75 {{ recommendation.text }}
        p.py-4 {{ recommendacion.last }}

</template>
<script setup lang="ts">

import { OhVueIcon } from "oh-vue-icons";
defineProps<{ recommendations: { icon: string, text: string }[], title: string, subtitle: string }>()
</script>