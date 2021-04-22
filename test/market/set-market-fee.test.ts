import {SetMarketFeeImpl} from "../../src/message/market/set-market-fee";

describe("set-market-fee schema tests", function () {
    test("valid", async () => {
        const message = new SetMarketFeeImpl({type: "market/set-market-fee", key: "10.0", value: "10.0"})
        await message.validate()
    });
    test("invalid key", async () => {
        const message = new SetMarketFeeImpl({type: "market/set-market-fee", key: "", value: "10.0"})
        await expect(message.validate()).rejects.toBe("key is not numeric")
    });
    test("invalid value", async () => {
        const message = new SetMarketFeeImpl({type: "market/set-market-fee", key: "10.0", value: ""})
        await expect(message.validate()).rejects.toBe("value is not numeric")
    });
})