<template>
    <header>
        <nav>
            <h1 class="justify-left">Supermanzer Middleware</h1>
            
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/admin">Admin</NuxtLink>
                <NuxtLink to="/login">Login</NuxtLink>
                <NuxtLink to="/logout">Logout</NuxtLink>
            
        </nav>
    </header>
    <main>
        <slot />
    </main>
</template>

<style>
main {
    padding: 1rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #92ceef;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

a {
    color: black;
    text-decoration: none;
    align-items: end;
}

</style>