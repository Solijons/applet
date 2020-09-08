export interface ISitesService {
    getSiteConfig(shortName: string): ISiteConfig | undefined;
    getSiteLongName(): string | undefined;
    getSitePrefix(): string | undefined;
    getSitePrograms(): string[] | undefined;
    getSiteShortNameFromURL(): string | undefined;
}

export interface ISiteConfig {
    [shortName: string]: {
        [index: string]: any;
        longName?: string;
        prefix?: string;
    };
}
