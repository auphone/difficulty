import { expect } from "chai";
import "mocha";
import { Loader } from "./loader";

describe("load word list", () => {
    let wordlist: string[][];
    it("load default word list", async () => {
        wordlist = await Loader.loadCSV();
        return expect(wordlist).to.not.be.empty;
    });
    it("load custom word list", async () => {
        const customWordlist = await Loader.loadCSV({
            filepath: "./wordlist/wordlist.test.csv",
        });
        return expect(customWordlist[0].length).not.eq(wordlist[0].length);
    });
    it("load word list sync", () => {
        const syncWordlist = Loader.loadCSVSync();
        return expect(syncWordlist).to.not.be.empty;
    });
});

describe("define level", () => {
    let wordlist: string[][];
    it("default level should be 3", async () => {
        wordlist = await Loader.loadCSV();
        expect(wordlist.length - 1).eq(3);
    });
    it("levels size should not be the same", () => {
        expect(wordlist[0].length).not.eq(wordlist[1].length);
    });
    it("custom level should be 4", async () => {
        const customWordlist = await Loader.loadCSV({
            levelsThreshold: [20000, 15000, 10000, 5000],
        });
        expect(customWordlist.length - 1).eq(4);
    });
});
