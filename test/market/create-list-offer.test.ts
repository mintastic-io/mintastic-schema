import {v4 as uuid} from "uuid"
import {CreateListOffer, CreateListOfferValidator} from "../../src";

describe("create-list-offer schema tests", function () {
    test("valid", async () => {
        const message: CreateListOffer = {
            __type__: "market/create-list-offer",
            owner: uuid(),
            assetId: uuid(),
            price: "10.0",
        }
        await new CreateListOfferValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message: CreateListOffer = {
            __type__: "market/create-list-offer",
            owner: "",
            assetId: uuid(),
            price: "10.0",
        }
        await expect(new CreateListOfferValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message: CreateListOffer = {
            __type__: "market/create-list-offer",
            owner: uuid(),
            assetId: "",
            price: "10.0",
        }
        await expect(new CreateListOfferValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid price", async () => {
        const message: CreateListOffer = {
            __type__: "market/create-list-offer",
            owner: uuid(),
            assetId: uuid(),
            price: "test",
        }
        await expect(new CreateListOfferValidator().validate(message)).rejects.toBe("price is not numeric")
    });
})