import {v4 as uuid} from "uuid"
import {LockSeriesImpl} from "../../src/message/nft/lock-series";

describe("lock-series schema tests", function () {
    test("valid server", async () => {
        const message = new LockSeriesImpl({
            type: "nft/lock-series",
            creatorId: uuid(),
            series: 10,
        })
        await message.validate("server")
    });
    test("valid client", async () => {
        const message = new LockSeriesImpl({
            type: "nft/lock-series",
            series: 10,
        })
        await message.validate("client")
    });
    test("invalid creatorId client", async () => {
        const message = new LockSeriesImpl({
            type: "nft/lock-series",
            creatorId: uuid(),
            series: 10,
        })
        await expect(message.validate("client")).rejects.toBe("creatorId must be null")
    });
    test("invalid creatorId server", async () => {
        const message = new LockSeriesImpl({
            type: "nft/lock-series",
            series: 10,
        })
        await expect(message.validate("server")).rejects.toBe("creatorId must not be empty")
    });
    test("invalid series", async () => {
        const message = new LockSeriesImpl({
            type: "nft/lock-series",
            creatorId: uuid(),
            series: -1,
        })
        await expect(message.validate("server")).rejects.toBe("series is negative")
    });
})