<template>
  <div class="app">
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

const edenFetch = useEdenFetch()
const { data } = await useAsyncData(() =>
  edenFetch('/api/message', { method: 'GET' })
)

onMounted(() => alert(data.value))
</script>
