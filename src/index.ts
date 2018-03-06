import { Checker } from "./lib/checker/checker";
import { Loader } from "./lib/loader/loader";
import { ILoaderOption } from "./lib/loader/loader.types";

export class Difficulty extends Checker {

    constructor(wordlist: string[][]) {
        super(wordlist);
    }
}

export async function create(option?: ILoaderOption): Promise<Difficulty> {
    const wordlist = await Loader.loadCSV(option);
    return new Difficulty(wordlist);
}

export function createSync(option?: ILoaderOption): Difficulty {
    const wordlist = Loader.loadCSVSync(option);
    return new Difficulty(wordlist);
}
