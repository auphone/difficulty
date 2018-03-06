import { join } from "path";

export interface ILoaderOption {
    filepath?: string;
    levelsThreshold?: number[];
}

export interface ICsvHeader {
    word: string;
    frequency: string;
}

export class LoaderOption {
    public filepath: string;
    public levelsThreshold: number[];

    constructor(option: ILoaderOption) {
        this.filepath = option.filepath || join(__dirname, "../../../wordlist/wordlist.csv");
        this.levelsThreshold = option.levelsThreshold || [20000, 10000, 5000];
    }
}
