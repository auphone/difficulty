import { readFile, readFileSync } from "fs-extra";
import { promisify } from "util";
import { IWord } from "../types";
import { ILoaderOption, LoaderOption } from "./loader.types";

/* tslint:disable:no-var-requires */
const parse = promisify(require("csv-parse"));
const parseSync = require("csv-parse/lib/sync");
/* tslint:enable:no-var-requires */

export class Loader {
    public static async loadCSV(option?: ILoaderOption): Promise<string[][]> {
        const opt = new LoaderOption(option || {});
        const csvBuf = await readFile(opt.filepath);
        const csv = await parse(csvBuf);
        return await Loader.transformCSVBufferToWordList(csv, opt.levelsThreshold);
    }

    public static loadCSVSync(option?: ILoaderOption): string[][] {
        const opt = new LoaderOption(option || {});
        const csvBuf = readFileSync(opt.filepath);
        const csv = parseSync(csvBuf);
        return Loader.transformCSVBufferToWordList(csv, opt.levelsThreshold);
    }

    private static transformCSVBufferToWordList(csv: any[][], levelsThreshold: number[]): string[][] {
        const [header, ...arrs] = csv;
        const levelSize = levelsThreshold.length + 1;
        const wordList = Array.from({ length: levelSize }, () => new Array<string>());
        const reversedLT = levelsThreshold.reverse();
        for (const [word, frequency] of arrs) {
            const level = Loader.getLevel({ word, frequency }, reversedLT);
            wordList[level].push(word);
        }
        return wordList;
    }

    private static getLevel(word: IWord, reversedLT: number[]): number {
        // Default is 0, which means this word is super easy :/
        let level = 0;
        reversedLT.forEach((max, index) => {
            const min = index === 0 ? 0 : reversedLT[index - 1] + 1;
            if (word.frequency > min && word.frequency <= max) {
                level = index + 1;
            }
        });
        return level;
    }
}
