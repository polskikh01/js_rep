import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('js_rep');

export const baseUrl = navigations['js_rep'];

export const URLs = {
    main: {
        url: '/main',
    },
    product: {
        url: '/product',
    },
    accessories: {
        url: '/accessories',
    },
    complete: {
        url: '/complete',
    },
    contacts: {
        url: '/contacts',
    }
}