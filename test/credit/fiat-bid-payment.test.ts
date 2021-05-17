import {FiatBidPayment, FiatBidPaymentValidator} from "../../src";

describe("fiat-bid-payment schema tests", function () {
    test("valid", async () => {
        const message: FiatBidPayment = {
            __type__: "credit/fiat-bid-payment",
            owner: "test",
            amount: 200,
            assetId: "asdf",
            recipient: "asdf"
        }
        await new FiatBidPaymentValidator().validate(message)
    });
    test("invalid charge currency", async () => {
        const message: FiatBidPayment = {
            __type__: "credit/fiat-bid-payment",
            owner: "test",
            amount: 200,
            assetId: "",
            recipient: "asdf"
        }
        await expect(new FiatBidPaymentValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
})