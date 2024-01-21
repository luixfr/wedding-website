
<script setup lang="ts">
defineProps<{ title: string, schedule: { img: string, title: string, time: string }[] }>()
</script>
<template lang="pug">
#icon-grid.container.px-4.py-5
    h2.pb-2.border-bottom {{ title }}
    .container 
        .row.text-center
            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center(v-for="(item,index) in schedule")
                img.feature-icon(:src="item.img")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary {{item.title}}
                    p {{ item.time }}
                v-icon.d-none.d-sm-block(v-if="schedule.lenght-1 != index" name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(v-if="schedule.lenght-1 != index" name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")
           
</template>
<style scoped>
.feature-icon {
    width: 3em;
    padding: .5em;
}

.mr-0 {
    margin-right: 0;
}

pr-0 {
    padding-right: 0;
}

.feature-item {
    min-width: 300px;

}

.text-pink {
    color: #be394f;
}
</style>