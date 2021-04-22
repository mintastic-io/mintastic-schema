import {RejectBidImpl} from "../../src/message/market/reject-bid";
import {v4 as uuid} from "uuid"

describe("reject-bid schema tests", function () {
    test("valid", async () => {
        const message = new RejectBidImpl({type: "market/reject-bid", owner: uuid(), assetId: uuid(), bidId: 0})
        await message.validate()
    });
    test("invalid owner", async () => {
        const message = new RejectBidImpl({type: "market/reject-bid", owner: "", assetId: uuid(), bidId: 0})
        await expect(message.validate()).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message = new RejectBidImpl({type: "market/reject-bid", owner: uuid(), assetId: "", bidId: 0})
        await expect(message.validate()).rejects.toBe("assetId must not be empty")
    });
    test("invalid bid id", async () => {
        const message = new RejectBidImpl({type: "market/reject-bid", owner: uuid(), assetId: uuid(), bidId: -1})
        await expect(message.validate()).rejects.toBe("bidId is negative")
    });
})