import { getNavigations } from '@ijl/cli';

const navigations = getNavigations('js_rep');

export const baseUrl = navigations['js_rep'];

export const URLs = {
    main: {
        url: navigations['link.js_rep.main'],
    },
    product: {
        url: navigations['link.js_rep.product'],
    },
    accessories: {
        url: navigations['link.js_rep.accessories'],
    },
    complete: {
        url: navigations['link.js_rep.complete'],
    },
    contacts: {
        url: navigations['link.js_rep.contacts'],
    },
    shippingAndPayment: {
        url: navigations['link.js_rep.shippingAndPayment']
    }
}