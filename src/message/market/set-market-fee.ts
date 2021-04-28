import {Message} from "../message";
import {assertNumeric} from "../../api/assertions";

export interface SetMarketFee extends Message {
    __type__: "market/set-market-fee"
    key: string
    value: string
}

export class SetMarketFeeValidator {
    public static isInstance(object: any): object is SetMarketFee {
        return object["__type__"] === "market/set-market-fee";
    }

    public validate(message: SetMarketFee): Promise<SetMarketFee> {
        return Promise.resolve(message)
            .then(e => assertNumeric(e, "key"))
            .then(e => assertNumeric(e, "value"))
    }
}