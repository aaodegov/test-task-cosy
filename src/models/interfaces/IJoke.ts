export interface IJoke {
    category: string;
    flags: {
        explicit: boolean;
        nsfw: boolean;
        political: boolean;
        racist: boolean;
        religious: boolean;
        sexist: boolean;
    };
    id: number;
    joke: string;
    lang: string;
    safe: boolean;
    type: string;
}