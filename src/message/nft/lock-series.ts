import {Message} from "../message";
import {assertEquals, assertNotEmpty, assertNotNegative} from "../../api/assertions";
import {Token} from "../../api/types";

export interface LockSeries extends Message {
    __type__: "nft/lock-series"
    creatorId: string
    series: number
}

export class LockSeriesValidator {
    public static isInstance(object: any): object is LockSeries {
        return object["__type__"] === "nft/lock-series";
    }

    public validate(message: LockSeries, token: Token): Promise<LockSeries> {
        return Promise.resolve(message)
            .then(e => assertNotEmpty(e, "creatorId"))
            .then(e => assertEquals(e, "creatorId", token.getCreatorId()))
            .then(e => assertNotNegative(e, "series"))
    }
}
