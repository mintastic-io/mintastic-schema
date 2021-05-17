import {v4 as uuid} from "uuid"
import {UnlockOffering, UnlockOfferingValidator} from "../../src";

describe("unlock-offering schema tests", function () {
    test("valid", async () => {
        const message: UnlockOffering = {__type__: "market/unlock-offering", owner: uuid(), assetId: uuid(), amount: 0}
        await new UnlockOfferingValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message: UnlockOffering = {__type__: "market/unlock-offering", owner: "", assetId: uuid(), amount: 0}
        await expect(new UnlockOfferingValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message: UnlockOffering = {__type__: "market/unlock-offering", owner: uuid(), assetId: "", amount: 0}
        await expect(new UnlockOfferingValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid amount", async () => {
        const message: UnlockOffering = {__type__: "market/unlock-offering", owner: uuid(), assetId: uuid(), amount: -1}
        await expect(new UnlockOfferingValidator().validate(message)).rejects.toBe("amount is negative")
    });
})