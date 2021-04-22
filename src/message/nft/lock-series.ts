import {AbstractMessage, Message} from "../message";
import {assertNotEmpty, assertNotNegative, assertNull} from "../../api/assertions";

export interface LockSeries extends Message {
    type: "nft/lock-series"
    creatorId?: string
    series: number
}

export class LockSeriesImpl extends AbstractMessage implements LockSeries {
    readonly type = "nft/lock-series"
    readonly creatorId?: string
    readonly series: number

    constructor(message: LockSeries) {
        super(message);
        this.creatorId = message.creatorId
        this.series = message.series
    }

    public static isInstance(object: any): object is LockSeries {
        return object["type"] === "nft/lock-series";
    }

    public validate(source): Promise<LockSeries> {
        return Promise.resolve(this as LockSeries)
            .then(e => (source === "client") ? assertNull(e, "creatorId") : e)
            .then(e => (source === "server") ? assertNotEmpty(e, "creatorId") : e)
            .then(e => assertNotNegative(e, "series"))
    }

    public toServer(sub: string): Promise<LockSeries> {
        return Promise.resolve(Object.assign(this, {creatorId: sub}));
    }
}
