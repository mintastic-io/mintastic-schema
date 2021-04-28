import {v4 as uuid} from "uuid"
import {LockSeries, LockSeriesValidator} from "../../src";

describe("lock-series schema tests", function () {
    test("valid server", async () => {
        const creatorId = uuid();
        const message: LockSeries = {
            __type__: "nft/lock-series",
            creatorId: creatorId,
            series: 10,
        }
        await new LockSeriesValidator().validate(message, {sub:creatorId})
    });
    test("invalid series", async () => {
        const creatorId = uuid();
        const message:LockSeries = {
            __type__: "nft/lock-series",
            creatorId: creatorId,
            series: -1,
        }
        await expect(new LockSeriesValidator().validate(message, {sub:creatorId})).rejects.toBe("series is negative")
    });
})