import { ISitesService } from './interfaces';

export function isISitesService(obj: any): obj is ISitesService {
    return (
        typeof(obj) === 'object'
        && typeof(obj.getSiteConfig) === 'function'
        && typeof(obj.getSiteFromURL) === 'function'
        && typeof(obj.getSiteLongName) === 'function'
        && typeof(obj.getSitePrefix) === 'function'
        && typeof(obj.siteLookup) === 'function'
    );
}
