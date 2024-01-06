<template>
  <div class="app">
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

const edenFetch = useEdenFetch()
const { data } = await useAsyncData(() => edenFetch('/api/message', {}))

onMounted(() => alert(data.value?.message))
</script>
