<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: {
        type: Object as () => NuxtError,
        required: true
    }
})
</script>

<template>
    <NuxtLayout>
        <div class="error">
            <h1>{{ error.statusCode }}</h1>
            <p v-if="error.statusMessage">{{ error.statusMessage }}</p>
            <p v-else>An error occurred</p>
            <NuxtLink to="/">Home</NuxtLink>
        </div>
    </NuxtLayout>

</template>

<style lang="css">
.error {
    width: 30rem;
    margin: 0 auto;
    background: #ffdede;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ff7b7b;
    text-align: center;
    margin-top: 2rem;
}

</style>