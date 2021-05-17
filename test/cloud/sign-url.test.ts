import {SignUrl, SignUrlValidator} from "../../src";
import {v4 as uuid} from "uuid"
import {JWT} from "../tokens";

describe("sign-url schema tests", function () {
    test("valid", async () => {
        const creatorId = "83860f23-4b38-407d-a499-ef99bf8b6d42";
        const message: SignUrl = {__type__: "cloud/sign-url", fileName: "abc", assetId: uuid(), creatorId: creatorId};
        await new SignUrlValidator().validate(message, JWT);
    });
    test("invalid file name", async () => {
        const creatorId = "83860f23-4b38-407d-a499-ef99bf8b6d42";
        const message: SignUrl = {__type__: "cloud/sign-url", fileName: "", assetId: uuid(), creatorId: creatorId};
        await expect(new SignUrlValidator().validate(message, JWT)).rejects.toBe("fileName must not be empty")
    });
})