import {SignUrlImpl} from "../../src";
import {v4 as uuid} from "uuid"

describe("set-exchange-rate schema tests", function () {
    test("valid", async () => {
        const creatorId = uuid();
        const message = new SignUrlImpl({type: "cloud/sign-url", fileName: "abc", assetId: uuid(), creatorId: creatorId})
        await message.validate(creatorId);
    });
    test("invalid file name", async () => {
        const creatorId = uuid();
        const message = new SignUrlImpl({type: "cloud/sign-url", fileName: "", assetId: uuid(), creatorId: creatorId})
        await expect(message.validate(creatorId)).rejects.toBe("fileName must not be empty")
    });
})