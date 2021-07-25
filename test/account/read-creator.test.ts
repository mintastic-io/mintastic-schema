import {ReadUser, ReadUserValidator} from "../../src";

describe("read-creator schema tests", function () {
    test("valid", async () => {
        const message: ReadUser = {__type__: "ReadUser", userId: "asdf"}
        await new ReadUserValidator().validate(message);
    });
    test("invalid creatorId", async () => {
        const message: ReadUser = {__type__: "ReadUser", userId: ""}
        await expect(new ReadUserValidator().validate(message)).rejects.toContain("creatorId");
    });
})