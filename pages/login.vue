<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" placeholder="username" />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="password"/>
        <button type="submit">Login</button>
    </form>
</template>

<script setup lang="js">
const user = useCookie('user');
const router = useRouter();
const username = ref();
const password = ref();

const login = () => {
    console.log('Logging in');
    // Hard-coding the admin users for now
    const admin_users = ['mario', 'yoshi', 'judith']
    const role = admin_users.includes(username.value) ? 'admin' : 'user'

    // Set the user cookie
    user.value = { username: username.value, role: role};

    // Redirect to the home page
    return navigateTo('/');
}
</script>