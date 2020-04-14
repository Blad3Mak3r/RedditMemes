export class Meme {
    readonly id: string;
    readonly subreddit: string;
    readonly title: string;
    readonly author: string;
    readonly image: string;
    readonly ups: number;
    readonly downs: number;
    readonly score: number;
    readonly nsfw: boolean;
    readonly created_utc: bigint;

    constructor(content: any) {
        this.id = content.id;
        this.subreddit = content.subreddit;
        this.title = content.title;
        this.author = content.author;
        this.image = content.url;
        this.ups = content.ups;
        this.downs = content.downs;
        this.score = content.score;
        this.nsfw = content.over_18;
        this.created_utc = content.created_utc;
    }

}