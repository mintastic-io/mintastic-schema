import {v4 as uuid} from "uuid"
import {ReadMarketItem, ReadMarketItemValidator} from "../../src/message/market/read-market-item";

describe("read-market-item schema tests", function () {
    test("valid", async () => {
        const message: ReadMarketItem = {__type__: "market/read-market-item", id: uuid()}
        await new ReadMarketItemValidator().validate(message)
    });
    test("invalid id", async () => {
        const message: ReadMarketItem = {__type__: "market/read-market-item", id: ""}
        await expect(new ReadMarketItemValidator().validate(message)).rejects.toContain("id");
    });
})