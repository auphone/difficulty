import { expect } from "chai";
import { Loader } from "../loader/loader";
import { Checker } from "./checker";

describe("check word difficulty", () => {
    let checker: Checker;
    it("load csv", async () => {
        checker = new Checker(await Loader.loadCSV());
        const level = checker.getLevel("shared");
        expect(level).eq(1);
    });
});
