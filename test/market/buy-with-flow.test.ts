import {v4 as uuid} from "uuid"
import {BuyWithFlowImpl} from "../../src/message/market/buy-with-flow";

describe("buy-with-flow schema tests", function () {
    test("valid", async () => {
        const message = new BuyWithFlowImpl({
            type: "market/buy-with-flow",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 10
        })
        await message.validate()
    });
    test("invalid owner", async () => {
        const message = new BuyWithFlowImpl({
            type: "market/buy-with-flow",
            owner: "",
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 10
        })
        await expect(message.validate()).rejects.toBe("owner must not be empty")
    });
    test("invalid buyer", async () => {
        const message = new BuyWithFlowImpl({
            type: "market/buy-with-flow",
            owner: uuid(),
            buyer: "",
            assetId: uuid(),
            price: "10.0",
            amount: 10
        })
        await expect(message.validate()).rejects.toBe("buyer must not be empty")
    });
    test("invalid asset id", async () => {
        const message = new BuyWithFlowImpl({
            type: "market/buy-with-flow",
            owner: uuid(),
            buyer: uuid(),
            assetId: "",
            price: "10.0",
            amount: 10
        })
        await expect(message.validate()).rejects.toBe("assetId must not be empty")
    });
    test("invalid price", async () => {
        const message = new BuyWithFlowImpl({
            type: "market/buy-with-flow",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "test",
            amount: 10
        })
        await expect(message.validate()).rejects.toBe("price is not numeric")
    });
    test("invalid amount", async () => {
        const message = new BuyWithFlowImpl({
            type: "market/buy-with-flow",
            owner: uuid(),
            buyer: uuid(),
            assetId: uuid(),
            price: "10.0",
            amount: 0
        })
        await expect(message.validate()).rejects.toBe("amount must not equal value 0")
    });
})