import {v4 as uuid} from "uuid"
import {SetItemPrice, SetItemPriceValidator} from "../../src";

describe("set-item-price schema tests", function () {
    test("valid", async () => {
        const message: SetItemPrice = {
            __type__: "market/set-item-price",
            owner: uuid(),
            assetId: uuid(),
            price: "10.0",
        }
        await new SetItemPriceValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message: SetItemPrice = {
            __type__: "market/set-item-price",
            owner: "",
            assetId: uuid(),
            price: "10.0",
        }
        await expect(new SetItemPriceValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message: SetItemPrice = {
            __type__: "market/set-item-price",
            owner: uuid(),
            assetId: "",
            price: "10.0",
        }
        await expect(new SetItemPriceValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid price", async () => {
        const message: SetItemPrice = {
            __type__: "market/set-item-price",
            owner: uuid(),
            assetId: uuid(),
            price: "test",
        }
        await expect(new SetItemPriceValidator().validate(message)).rejects.toBe("price is not numeric")
    });
})