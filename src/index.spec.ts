import { expect } from "chai";
import { create, createSync, Difficulty } from "./index";

describe("using library", () => {
    let difficulty: Difficulty;
    it("create default instance", async () => {
        difficulty = await create();
        expect(difficulty.wordList.length).gt(0);
    });
    it("load custom word list", async () => {
        const difficulty2 = await create({
            filepath: "wordlist/wordlist.test.csv",
        });
        return expect(difficulty.wordList[0].length).not.eq(difficulty2.wordList[0].length);
    });
    it("create instance sync", () => {
        const syncDifficulty = createSync();
        expect(syncDifficulty.wordList.length).gt(0);
    });
    it("getLevel('a') should be 0", () => {
        expect(difficulty.getLevel("a")).eq(0);
    });
});
