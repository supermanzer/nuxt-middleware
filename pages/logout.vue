<template>
    <h1>Logout</h1>
</template>

<script setup lang="js">
// Inline middleware is middleware that is defined within the page component itself.
definePageMeta({
    middleware: function (to, from){
        const user = useCookie('user');
        user.value = null;

        return navigateTo('/login');
    }
})
</script>