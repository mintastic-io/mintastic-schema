import {LockSeries, LockSeriesValidator} from "../../src";
import {JWT} from "../tokens";

describe("lock-series schema tests", function () {
    test("valid server", async () => {
        const message: LockSeries = {
            __type__: "nft/lock-series",
            creatorId: "83860f23-4b38-407d-a499-ef99bf8b6d42",
            series: 10,
        }
        await new LockSeriesValidator().validate(message, JWT)
    });
    test("invalid series", async () => {
        const message: LockSeries = {
            __type__: "nft/lock-series",
            creatorId: "83860f23-4b38-407d-a499-ef99bf8b6d42",
            series: -1,
        }
        await expect(new LockSeriesValidator().validate(message, JWT)).rejects.toBe("series is negative")
    });
})