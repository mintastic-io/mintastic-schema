import {AbstractMessage, Message} from "../message";
import {assertEquals, assertNotEmpty, assertNotNegative} from "../../api/assertions";

export interface LockSeries extends Message {
    type: "nft/lock-series"
    creatorId: string
    series: number
}

export class LockSeriesImpl extends AbstractMessage implements LockSeries {
    readonly type = "nft/lock-series"
    readonly creatorId: string
    readonly series: number

    constructor(message: LockSeries) {
        super(message);
        this.creatorId = message.creatorId
        this.series = message.series
    }

    public static isInstance(object: any): object is LockSeries {
        return object["type"] === "nft/lock-series";
    }

    public validate(sub): Promise<LockSeries> {
        return Promise.resolve(this as LockSeries)
            .then(e => assertNotEmpty(e, "creatorId"))
            .then(e => assertEquals(e, "creatorId", sub))
            .then(e => assertNotNegative(e, "series"))
    }
}
