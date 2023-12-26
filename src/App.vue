<template>
    <div ref="bar">
    </div>
</template>

<script setup>
import { appsBarForVue } from 'components/appsBarForVue';
import { onMounted, ref, createApp } from 'vue';
import Main from './Main.vue';

const bar = ref();

onMounted(() => {
    appsBarForVue(bar.value, 'vue-test', (element) => {
        createApp(Main).mount(element);
    });
})
</script>
