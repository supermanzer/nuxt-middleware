<template>
    <p> {{ greeting }}</p>
</template>

<script setup lang="js">
    const user = useCookie('user');

    /**
     * Below is an example of using named middleware.  This has been commented out in favor of our global middleware
     */
    // Using inline middleware to make a route guard, only allowing logged in users to access the page
    // definePageMeta({
    //     middleware: ['auth']  // The order of the middleware is important and if your middleware returns a value it will interupt the middleware chain
    // });

    const greeting = computed(() => {
        return user.value ? `Hello ${user.value.username}` : 'Hello World';
    });
</script>