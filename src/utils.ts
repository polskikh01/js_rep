import {classic, mini, ready, simple} from './asset/index';

export function getImgByName(name) {
    switch (name) {
        case 'simple':
            return simple
        case 'classic':
            return classic
        case 'mini':
            return mini
        case 'ready':
            return ready
    }
}

