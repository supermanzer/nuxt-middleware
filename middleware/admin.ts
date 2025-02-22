/**
 * Middleware that checks if the user is an admin
 */

import type { User } from './types';

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCookie<User>('user');

    if (user.value.role !== 'admin') {
        console.log('not admin');
        throw showError({
            statusCode: 403,
            statusMessage: 'You are not authorized to access this page',
        });
    }
})