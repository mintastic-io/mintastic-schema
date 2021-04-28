import {SignUrl, SignUrlValidator} from "../../src";
import {v4 as uuid} from "uuid"

describe("sign-url schema tests", function () {
    test("valid", async () => {
        const creatorId = uuid();
        const message: SignUrl = {__type__: "cloud/sign-url", fileName: "abc", assetId: uuid(), creatorId: creatorId};
        await new SignUrlValidator().validate(message, creatorId);
    });
    test("invalid file name", async () => {
        const creatorId = uuid();
        const message: SignUrl = {__type__: "cloud/sign-url", fileName: "", assetId: uuid(), creatorId: creatorId};
        await expect(new SignUrlValidator().validate(message, creatorId)).rejects.toBe("fileName must not be empty")
    });
})