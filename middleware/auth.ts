
import type { User } from './types';

export default defineNuxtRouteMiddleware((to, from) => {
    const authenticated = useCookie<User>('user');

    if (!authenticated.value) {
        console.log('not authenticated');
        // Redirect to login page - this will stop any middleware chain declared after this middleware
        return navigateTo('/login');
    } else {
        console.log('authenticated');
    }
})