import {SetExchangeRateImpl} from "../../src/message/credit/set-exchange-rate";

describe("set-exchange-rate schema tests", function () {
    test("valid", async () => {
        const message = new SetExchangeRateImpl({type: "credit/set-exchange-rate", currency: "eur", exchangeRate: "1.0"})
        await message.validate()
    });
    test("invalid exchange rate", async () => {
        const message = new SetExchangeRateImpl({type: "credit/set-exchange-rate", currency: "eur", exchangeRate: "test"})
        await expect(message.validate()).rejects.toBe("exchangeRate is not numeric")
    });
})