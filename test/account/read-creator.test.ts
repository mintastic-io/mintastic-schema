import {ReadCreator, ReadCreatorValidator} from "../../src";

describe("read-creator schema tests", function () {
    test("valid", async () => {
        const message: ReadCreator = {__type__: "account/read-creator", creatorId: "asdf"}
        await new ReadCreatorValidator().validate(message);
    });
    test("invalid creatorId", async () => {
        const message: ReadCreator = {__type__: "account/read-creator", creatorId: ""}
        await expect(new ReadCreatorValidator().validate(message)).rejects.toContain("creatorId");
    });
})