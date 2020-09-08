import { ISiteConfig, ISitesService } from './interfaces';

export default class SitesService implements ISitesService {
    protected sites: ISiteConfig;

    constructor(sites: ISiteConfig) {
        this.sites = sites;
        this.getSiteConfig = this.getSiteConfig.bind(this);
        this.getSiteShortNameFromURL = this.getSiteShortNameFromURL.bind(this);
        this.getSiteLongName = this.getSiteLongName.bind(this);
        this.getSitePrefix = this.getSitePrefix.bind(this);
        this.getSitePrograms = this.getSitePrograms.bind(this);
    }

    public getSiteConfig(shortName: string): ISiteConfig | undefined {
        if (this.sites) {
            return this.sites[shortName];
        } else {
            return undefined;
        }
    }

    public getSiteLongName(): string | undefined {
        if (this.getSiteShortNameFromURL() !== undefined) {
            return this.sites[this.getSiteShortNameFromURL()!].longName;
        } else {
            return undefined;
        }
    }

    public getSitePrefix(): string | undefined {
        if (this.getSiteShortNameFromURL() !== undefined) {
            return this.sites[this.getSiteShortNameFromURL()!].prefix;
        } else {
            return undefined;
        }
    }

    public getSitePrograms(): string[] | undefined {
        if (this.getSiteShortNameFromURL() !== undefined) {
            return this.sites[this.getSiteShortNameFromURL()!].programs;
        } else {
            return undefined;
        }
    }

    /**
     * Get site from URL.
     * Will search URL path for first occurance of configured site
     * (site recognized by shortName).
     * if site is not recognized by shortName
     * @returns {undefined} returns undefined or site shortName
     */
    public getSiteShortNameFromURL(): string | undefined {
        const pathnameFromURL: string[] = window.location.pathname.split('/');
        let currentSite;
        for (const site in this.sites) {
            if (pathnameFromURL.includes(site)) {
                currentSite = site;
            }
        }

        return currentSite;
    }
}
