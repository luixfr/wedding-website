<template lang="pug">
.container
    footer.d-flex.flex-wrap.justify-content-between.align-items-center.py-3.my-4.border-top
        p.col-md-4.mb-0.text-body-secondary &copy; 2024 daikev, Love

        ul.nav.col-md-4.justify-content-end
            li.nav-item(v-for="link in links")
                a.nav-link.px-2.text-body-secondary(:href='link.link') {{link.title}}
  

</template>
<script setup lang="ts">

defineProps<{ links: { link: string, title: string }[] }>()
</script>