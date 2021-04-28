import {v4 as uuid} from "uuid"
import {AbortBid, AbortBidValidator} from "../../src";

describe("abort-bid schema tests", function () {
    test("valid", async () => {
        const message: AbortBid = {__type__: "market/abort-bid", owner: uuid(), assetId: uuid(), bidId: 0}
        await new AbortBidValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message:AbortBid = {__type__: "market/abort-bid", owner: "", assetId: uuid(), bidId: 0}
        await expect(new AbortBidValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message:AbortBid = {__type__: "market/abort-bid", owner: uuid(), assetId: "", bidId: 0}
        await expect(new AbortBidValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid bid id", async () => {
        const message: AbortBid = {__type__: "market/abort-bid", owner: uuid(), assetId: uuid(), bidId: -1}
        await expect(new AbortBidValidator().validate(message)).rejects.toBe("bidId is negative")
    });
})