import {v4 as uuid} from "uuid"
import {AssetExists, AssetExistsValidator} from "../../src/message/cloud/asset-exists";

describe("asset-exists schema tests", function () {
    test("valid", async () => {
        const creatorId = uuid();
        const message: AssetExists = {__type__: "cloud/asset-exists", assetId: uuid()};
        await new AssetExistsValidator().validate(message);
    });
    test("invalid asset id", async () => {
        const creatorId = uuid();
        const message: AssetExists = {__type__: "cloud/asset-exists", assetId: ""};
        await expect(new AssetExistsValidator().validate(message)).rejects.toBe("assetId must not be empty")
    });
})