import {v4 as uuid} from "uuid"
import {BuyWithFiat, BuyWithFiatValidator} from "../../src";

describe("buy-with-fiat schema tests", function () {
    test("valid", async () => {
        const message:BuyWithFiat = {
            __type__: "market/buy-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 10,
            unlock: false
        }
        await new BuyWithFiatValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message:BuyWithFiat = {
            __type__: "market/buy-with-fiat",
            owner: "",
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 10,
            unlock: false
        }
        await expect(new BuyWithFiatValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid buyer", async () => {
        const message:BuyWithFiat = {
            __type__: "market/buy-with-fiat",
            owner: uuid(),
            buyer: "",
            assetId: uuid(),
            price: "10.0",
            amount: 10,
            unlock: false
        }
        await expect(new BuyWithFiatValidator().validate(message)).rejects.toBe("buyer must not be empty")
    });
    test("invalid asset id", async () => {
        const message:BuyWithFiat = {
            __type__: "market/buy-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: "",
            price: "10.0",
            amount: 10,
            unlock: false
        }
        await expect(new BuyWithFiatValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid price", async () => {
        const message:BuyWithFiat = {
            __type__: "market/buy-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "test",
            amount: 10,
            unlock: false
        }
        await expect(new BuyWithFiatValidator().validate(message)).rejects.toBe("price is not numeric")
    });
    test("invalid amount", async () => {
        const message: BuyWithFiat = {
            __type__: "market/buy-with-fiat",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 0,
            unlock: false
        }
        await expect(new BuyWithFiatValidator().validate(message)).rejects.toBe("amount must not equal value 0")
    });
})