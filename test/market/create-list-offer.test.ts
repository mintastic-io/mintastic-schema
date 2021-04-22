import {v4 as uuid} from "uuid"
import {CreateListOfferImpl} from "../../src/message/market/create-list-offer";

describe("create-list-offer schema tests", function () {
    test("valid", async () => {
        const message = new CreateListOfferImpl({
            type: "market/create-list-offer",
            owner: uuid(),
            assetId: uuid(),
            price: "10.0",
        })
        await message.validate()
    });
    test("invalid owner", async () => {
        const message = new CreateListOfferImpl({
            type: "market/create-list-offer",
            owner: "",
            assetId: uuid(),
            price: "10.0",
        })
        await expect(message.validate()).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message = new CreateListOfferImpl({
            type: "market/create-list-offer",
            owner: uuid(),
            assetId: "",
            price: "10.0",
        })
        await expect(message.validate()).rejects.toBe("assetId must not be empty")
    });
    test("invalid price", async () => {
        const message = new CreateListOfferImpl({
            type: "market/create-list-offer",
            owner: uuid(),
            assetId: uuid(),
            price: "test",
        })
        await expect(message.validate()).rejects.toBe("price is not numeric")
    });
})