import {
    classic,
    mini,
    ready,
    simple,
    miniK,
    magnit,
    killerM,
    glinaClassic,
    glinaMini,
    white,
    black,
    connector,
    classicK,
} from './asset/index';

export function getImgByName(name) {
    switch (name) {
        case 'simple':
            return simple;
        case 'classic':
            return classic;
        case 'mini':
            return mini;
        case 'ready':
            return ready;
        case 'miniK':
            return miniK;
        case 'magnit':
            return magnit;
        case 'killerM':
            return killerM;
        case 'glinaClassic':
            return glinaClassic;
        case 'glinaMini':
            return glinaMini;
        case 'white':
            return white;
        case 'black':
            return black;
        case 'connector':
            return connector;
        case 'classicK':
            return classicK;
    }
}
