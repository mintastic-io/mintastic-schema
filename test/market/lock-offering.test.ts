import {v4 as uuid} from "uuid"
import {LockOffering, LockOfferingValidator} from "../../src";

describe("lock-offering schema tests", function () {
    test("valid", async () => {
        const message: LockOffering = {__type__: "market/lock-offering", owner: uuid(), assetId: uuid(), amount: 0}
        await new LockOfferingValidator().validate(message)
    });
    test("invalid owner", async () => {
        const message: LockOffering = {__type__: "market/lock-offering", owner: "", assetId: uuid(), amount: 0}
        await expect(new LockOfferingValidator().validate(message)).rejects.toBe("owner must not be empty")
    });
    test("invalid asset id", async () => {
        const message: LockOffering = {__type__: "market/lock-offering", owner: uuid(), assetId: "", amount: 0}
        await expect(new LockOfferingValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
    test("invalid amount", async () => {
        const message: LockOffering = {__type__: "market/lock-offering", owner: uuid(), assetId: uuid(), amount: -1}
        await expect(new LockOfferingValidator().validate(message)).rejects.toBe("amount is negative")
    });
})