import {v4 as uuid} from "uuid"
import {LockSeriesImpl} from "../../src/message/nft/lock-series";

describe("lock-series schema tests", function () {
    test("valid server", async () => {
        const creatorId = uuid();
        const message = new LockSeriesImpl({
            type: "nft/lock-series",
            creatorId: creatorId,
            series: 10,
        })
        await message.validate(creatorId)
    });
    test("invalid series", async () => {
        const creatorId = uuid();
        const message = new LockSeriesImpl({
            type: "nft/lock-series",
            creatorId: creatorId,
            series: -1,
        })
        await expect(message.validate(creatorId)).rejects.toBe("series is negative")
    });
})