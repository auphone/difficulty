export class Checker {
    public wordList: string[][];

    constructor(wordList: string[][]) {
        this.wordList = wordList;
    }

    public getLevel(word: string): number {
        // Default is super hard :O
        let level = this.wordList.length - 1;
        this.wordList.forEach((levelWordList, index) => {
            if (levelWordList.indexOf(word) > -1) {
                level = index;
        }
        });
        return level;
    }
}
