import {v4 as uuid} from "uuid"
import {RejectBid, RejectBidValidator} from "../../src";

describe("reject-bid schema tests", function () {
    test("valid", async () => {
        const message: RejectBid = {__type__: "market/reject-bid", owner: uuid(), assetId: uuid(), bidId: 0}
        await new RejectBidValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message: RejectBid = {__type__: "market/reject-bid", owner: "", assetId: uuid(), bidId: 0}
        await expect(new RejectBidValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message: RejectBid = {__type__: "market/reject-bid", owner: uuid(), assetId: "", bidId: 0}
        await expect(new RejectBidValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid bid id", async () => {
        const message: RejectBid = {__type__: "market/reject-bid", owner: uuid(), assetId: uuid(), bidId: -1}
        await expect(new RejectBidValidator().validate(message)).rejects.toBe("bidId is negative")
    });
})