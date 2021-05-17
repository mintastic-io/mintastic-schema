import {FiatPayment, FiatPaymentValidator} from "../../src";

describe("fiat-payment schema tests", function () {
    test("valid", async () => {
        const message: FiatPayment = {
            __type__: "credit/fiat-payment",
            owner: "test",
            amount: 200,
            assetId: "asdf",
            recipient: "asdf"
        }
        await new FiatPaymentValidator().validate(message)
    });
    test("invalid charge currency", async () => {
        const message: FiatPayment = {
            __type__: "credit/fiat-payment",
            owner: "test",
            amount: 200,
            assetId: "",
            recipient: "asdf"
        }
        await expect(new FiatPaymentValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
})