import {v4 as uuid} from "uuid"
import {Mint, MintValidator} from "../../src";

describe("mint schema tests", function () {
    test("valid", async () => {
        const message: Mint = {
            __type__: "nft/mint",
            recipient: uuid(),
            assetId: uuid(),
            amount: 10
        }
        await new MintValidator().validate(message)
    });
    test("invalid recipient", async () => {
        const message: Mint = {
            __type__: "nft/mint",
            recipient: "",
            assetId: uuid(),
            amount: 10
        }
        await expect(new MintValidator().validate(message)).rejects.toBe("recipient must not be empty")
    });
    test("invalid asset id", async () => {
        const message:Mint = {
            __type__: "nft/mint",
            recipient: uuid(),
            assetId: "",
            amount: 10
        }
        await expect(new MintValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid amount", async () => {
        const message: Mint = {
            __type__: "nft/mint",
            recipient: uuid(),
            assetId: uuid(),
            amount: 0
        }
        await expect(new MintValidator().validate(message)).rejects.toBe("amount must not equal value 0")
    });
})