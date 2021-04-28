import {SetBlockLimit, SetBlockLimitValidator} from "../../src";

describe("set-block-limit schema tests", function () {
    test("valid", async () => {
        const message: SetBlockLimit = {__type__: "market/set-block-limit", blockLimit: 10}
        await new SetBlockLimitValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message: SetBlockLimit = {__type__: "market/set-block-limit", blockLimit: -1}
        await expect(new SetBlockLimitValidator().validate(message)).rejects.toBe("blockLimit is negative")
    });
})