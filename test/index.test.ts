import {v4 as uuid} from "uuid"
import {getAssetId} from "../src";

describe("mintastic create-asset schema tests", function () {
    test("valid message (client)", async () => {
        const creatorId = uuid();
        expect(getAssetId(creatorId, "test")).toBe(getAssetId(creatorId, "test"));
        expect(getAssetId(creatorId, "test")).not.toBe(getAssetId(creatorId, "text"));
    });
})