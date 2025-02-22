<template>
    <h1>Admin Page</h1>
    <h3>You can administer stuff</h3>
</template>

<script setup lang="js">
  definePageMeta({
    // We check the auth first, because we can't check if the user is an admin if they are not logged in
    middleware: ['admin']
  });
</script>