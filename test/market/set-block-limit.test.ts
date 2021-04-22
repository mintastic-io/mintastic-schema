import {SetBlockLimitImpl} from "../../src/message/market/set-block-limit";

describe("set-block-limit schema tests", function () {
    test("valid", async () => {
        const message = new SetBlockLimitImpl({type: "market/set-block-limit", blockLimit: 10})
        await message.validate()
    });
    test("invalid owner", async () => {
        const message = new SetBlockLimitImpl({type: "market/set-block-limit", blockLimit: -1})
        await expect(message.validate()).rejects.toBe("blockLimit is negative")
    });
})