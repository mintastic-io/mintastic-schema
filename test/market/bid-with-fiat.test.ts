import {v4 as uuid} from "uuid"
import {BidWithFiat, BidWithFiatValidator} from "../../src";

describe("bid-with-fiat schema tests", function () {
    test("valid", async () => {
        const message:BidWithFiat = {
            __type__: "market/bid-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 10
        }
        await new BidWithFiatValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message:BidWithFiat = {
            __type__: "market/bid-with-fiat",
            owner: "",
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 10
        }
        await expect(new BidWithFiatValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid buyer", async () => {
        const message:BidWithFiat = {
            __type__: "market/bid-with-fiat",
            owner: uuid(),
            buyer: "",
            assetId: uuid(),
            price: "10.0",
            amount: 10
        }
        await expect(new BidWithFiatValidator().validate(message)).rejects.toBe("buyer must not be empty")
    });
    test("invalid asset id", async () => {
        const message:BidWithFiat = {
            __type__: "market/bid-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: "",
            price: "10.0",
            amount: 10
        }
        await expect(new BidWithFiatValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid price", async () => {
        const message:BidWithFiat = {
            __type__: "market/bid-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "test",
            amount: 10
        }
        await expect(new BidWithFiatValidator().validate(message)).rejects.toBe("price is not numeric")
    });
    test("invalid amount", async () => {
        const message:BidWithFiat = {
            __type__: "market/bid-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 0
        }
        await expect(new BidWithFiatValidator().validate(message)).rejects.toBe("amount must not equal value 0")
    });
})