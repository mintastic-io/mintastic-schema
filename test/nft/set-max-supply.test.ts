import {v4 as uuid} from "uuid"
import {SetMaxSupply, SetMaxSupplyValidator} from "../../src";

describe("set-max-supply schema tests", function () {
    test("valid", async () => {
        const message: SetMaxSupply = {
            __type__: "nft/set-max-supply",
            assetId: uuid(),
            supply: 10
        }
        await new SetMaxSupplyValidator().validate(message)
    });
    test("invalid asset id", async () => {
        const message: SetMaxSupply = {
            __type__: "nft/set-max-supply",
            assetId: "",
            supply: 10
        }
        await expect(new SetMaxSupplyValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid supply", async () => {
        const message: SetMaxSupply = {
            __type__: "nft/set-max-supply",
            assetId: uuid(),
            supply: 0
        }
        await expect(new SetMaxSupplyValidator().validate(message)).rejects.toBe("supply must not equal value 0")
    });
})