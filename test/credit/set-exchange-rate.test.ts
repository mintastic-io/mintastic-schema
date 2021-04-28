import {SetExchangeRate, SetExchangeRateValidator} from "../../src";

describe("set-exchange-rate schema tests", function () {
    test("valid", async () => {
        const message:SetExchangeRate = {__type__: "credit/set-exchange-rate", currency: "eur", exchangeRate: "1.0"}
        await new SetExchangeRateValidator().validate(message)
    });
    test("invalid exchange rate", async () => {
        const message:SetExchangeRate = {__type__: "credit/set-exchange-rate", currency: "eur", exchangeRate: "test"}
        await expect(new SetExchangeRateValidator().validate(message)).rejects.toBe("exchangeRate is not numeric")
    });
})