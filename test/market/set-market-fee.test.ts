import {SetMarketFee, SetMarketFeeValidator} from "../../src";

describe("set-market-fee schema tests", function () {
    test("valid", async () => {
        const message: SetMarketFee = {__type__: "market/set-market-fee", key: "10.0", value: "10.0"}
        await new SetMarketFeeValidator().validate(message)
    });
    test("invalid key", async () => {
        const message: SetMarketFee = {__type__: "market/set-market-fee", key: "", value: "10.0"}
        await expect(new SetMarketFeeValidator().validate(message)).rejects.toBe("key is not numeric")
    });
    test("invalid value", async () => {
        const message: SetMarketFee = {__type__: "market/set-market-fee", key: "10.0", value: ""}
        await expect(new SetMarketFeeValidator().validate(message)).rejects.toBe("value is not numeric")
    });
})