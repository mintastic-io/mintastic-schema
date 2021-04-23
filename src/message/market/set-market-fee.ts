import {AbstractMessage, Message} from "../message";
import {assertNumeric} from "../../api/assertions";

export interface SetMarketFee extends Message {
    type: "market/set-market-fee"
    key: string
    value: string
}

export class SetMarketFeeImpl extends AbstractMessage implements SetMarketFee {
    readonly type = "market/set-market-fee"
    readonly key: string
    readonly value: string

    constructor(message: SetMarketFee) {
        super(message);
        this.key = message.key
        this.value = message.value
    }

    public static isInstance(object: any): object is SetMarketFee {
        return object["type"] === "market/set-market-fee";
    }

    public validate(): Promise<SetMarketFee> {
        return Promise.resolve(this as SetMarketFee)
            .then(e => assertNumeric(e, "key"))
            .then(e => assertNumeric(e, "value"))
    }
}