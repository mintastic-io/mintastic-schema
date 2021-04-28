import {v4 as uuid} from "uuid"
import {AcceptBid, AcceptBidValidator} from "../../src";

describe("accept-bid schema tests", function () {
    test("valid", async () => {
        const message: AcceptBid = {__type__: "market/accept-bid", owner: uuid(), assetId: uuid(), bidId: 0};
        await new AcceptBidValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message:AcceptBid = {__type__: "market/accept-bid", owner: "", assetId: uuid(), bidId: 0}
        await expect(new AcceptBidValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message:AcceptBid = {__type__: "market/accept-bid", owner: uuid(), assetId: "", bidId: 0}
        await expect(new AcceptBidValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid bid id", async () => {
        const message:AcceptBid = {__type__: "market/accept-bid", owner: uuid(), assetId: uuid(), bidId: -1}
        await expect(new AcceptBidValidator().validate(message)).rejects.toBe("bidId is negative")
    });
})