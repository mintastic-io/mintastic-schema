import {v4 as uuid} from "uuid"
import {SetMaxSupplyImpl} from "../../src/message/nft/set-max-supply";

describe("set-max-supply schema tests", function () {
    test("valid", async () => {
        const message = new SetMaxSupplyImpl({
            type: "nft/set-max-supply",
            assetId: uuid(),
            supply: 10
        })
        await message.validate()
    });
    test("invalid asset id", async () => {
        const message = new SetMaxSupplyImpl({
            type: "nft/set-max-supply",
            assetId: "",
            supply: 10
        })
        await expect(message.validate()).rejects.toBe("assetId must not be empty")
    });
    test("invalid supply", async () => {
        const message = new SetMaxSupplyImpl({
            type: "nft/set-max-supply",
            assetId: uuid(),
            supply: 0
        })
        await expect(message.validate()).rejects.toBe("supply must not equal value 0")
    });
})