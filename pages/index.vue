<template>
    <p> {{ greeting }}</p>
</template>

<script setup lang="js">
    const user = useCookie('user');

    // Using inline middleware to make a route guard, only allowing logged in users to access the page
    definePageMeta({
        middleware: ['auth']  // The order of the middleware is important and if your middleware returns a value it will interupt the middleware chain
    });

    const greeting = computed(() => {
        return user.value ? `Hello ${user.value.username}` : 'Hello World';
    });
</script>