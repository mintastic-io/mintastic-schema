import {v4 as uuid} from "uuid"
import {CreateLazyOffer, CreateLazyOfferValidator} from "../../src";

describe("create-lazy-offer schema tests", function () {
    test("valid", async () => {
        const message: CreateLazyOffer = {
            __type__: "market/create-lazy-offer",
            owner: uuid(),
            assetId: uuid(),
            price: "10.0",
        }
        await new CreateLazyOfferValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message: CreateLazyOffer = {
            __type__: "market/create-lazy-offer",
            owner: "",
            assetId: uuid(),
            price: "10.0",
        }
        await expect(new CreateLazyOfferValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message: CreateLazyOffer = {
            __type__: "market/create-lazy-offer",
            owner: uuid(),
            assetId: "",
            price: "10.0",
        }
        await expect(new CreateLazyOfferValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid price", async () => {
        const message: CreateLazyOffer = {
            __type__: "market/create-lazy-offer",
            owner: uuid(),
            assetId: uuid(),
            price: "test",
        }
        await expect(new CreateLazyOfferValidator().validate(message)).rejects.toBe("price is not numeric")
    });
})