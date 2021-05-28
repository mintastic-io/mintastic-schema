import {v4 as uuid} from "uuid"
import {IsMarketItem, IsMarketItemValidator} from "../../src";

describe("is-market-item schema tests", function () {
    test("valid", async () => {
        const message: IsMarketItem = {__type__: "market/is-market-item", assetId: uuid(), owner: uuid()}
        await new IsMarketItemValidator().validate(message)
    });
    test("invalid assetId", async () => {
        const message: IsMarketItem = {__type__: "market/is-market-item", assetId: "", owner: uuid()}
        await expect(new IsMarketItemValidator().validate(message)).rejects.toContain("assetId");
    });
    test("invalid owner", async () => {
        const message: IsMarketItem = {__type__: "market/is-market-item", assetId: uuid(), owner: ""}
        await expect(new IsMarketItemValidator().validate(message)).rejects.toContain("owner");
    });
})