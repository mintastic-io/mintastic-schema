import {v4 as uuid} from "uuid"
import {MintImpl} from "../../src/message/nft/mint";

describe("mint schema tests", function () {
    test("valid", async () => {
        const message = new MintImpl({
            type: "nft/mint",
            recipient: uuid(),
            assetId: uuid(),
            amount: 10
        })
        await message.validate()
    });
    test("invalid recipient", async () => {
        const message = new MintImpl({
            type: "nft/mint",
            recipient: "",
            assetId: uuid(),
            amount: 10
        })
        await expect(message.validate()).rejects.toBe("recipient must not be empty")
    });
    test("invalid asset id", async () => {
        const message = new MintImpl({
            type: "nft/mint",
            recipient: uuid(),
            assetId: "",
            amount: 10
        })
        await expect(message.validate()).rejects.toBe("assetId must not be empty")
    });
    test("invalid amount", async () => {
        const message = new MintImpl({
            type: "nft/mint",
            recipient: uuid(),
            assetId: uuid(),
            amount: 0
        })
        await expect(message.validate()).rejects.toBe("amount must not equal value 0")
    });
})