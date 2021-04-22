export {Message} from "./message/message";
export {AbstractMessage} from "./message/message";

// cloud messages
export {SignUrl} from "./message/cloud/sign-url";

// market messages
export {AbortBid} from "./message/market/abort-bid";
export {AcceptBid} from "./message/market/accept-bid";
export {BidWithFiat} from "./message/market/bid-with-fiat";
export {BidWithFlow} from "./message/market/bid-with-flow";
export {BuyWithFiat} from "./message/market/buy-with-fiat";
export {BuyWithFlow} from "./message/market/buy-with-flow";
export {CreateLazyOffer} from "./message/market/create-lazy-offer";
export {CreateListOffer} from "./message/market/create-list-offer";
export {RejectBid} from "./message/market/reject-bid";
export {SetBlockLimit} from "./message/market/set-block-limit";
export {SetItemPrice} from "./message/market/set-item-price";
export {SetMarketFee} from "./message/market/set-market-fee";

// nft messages
export {CreateAsset} from "./message/nft/create-asset";
export {LockSeries} from "./message/nft/lock-series";
export {Mint} from "./message/nft/mint";
export {SetMaxSupply} from "./message/nft/set-max-supply";

import {SignUrl, SignUrlImpl} from "./message/cloud/sign-url";
import {AbortBid, AbortBidImpl} from "./message/market/abort-bid";
import {AcceptBid, AcceptBidImpl} from "./message/market/accept-bid";
import {BidWithFiat, BidWithFiatImpl} from "./message/market/bid-with-fiat";
import {BidWithFlow, BidWithFlowImpl} from "./message/market/bid-with-flow";
import {BuyWithFiat, BuyWithFiatImpl} from "./message/market/buy-with-fiat";
import {BuyWithFlow, BuyWithFlowImpl} from "./message/market/buy-with-flow";
import {CreateLazyOffer, CreateLazyOfferImpl} from "./message/market/create-lazy-offer";
import {CreateListOffer, CreateListOfferImpl} from "./message/market/create-list-offer";
import {RejectBid, RejectBidImpl} from "./message/market/reject-bid";
import {SetBlockLimit, SetBlockLimitImpl} from "./message/market/set-block-limit";
import {SetItemPrice, SetItemPriceImpl} from "./message/market/set-item-price";
import {SetMarketFee, SetMarketFeeImpl} from "./message/market/set-market-fee";
import {CreateAsset, CreateAssetImpl} from "./message/nft/create-asset";
import {LockSeries, LockSeriesImpl} from "./message/nft/lock-series";
import {Mint, MintImpl} from "./message/nft/mint";
import {SetMaxSupply, SetMaxSupplyImpl} from "./message/nft/set-max-supply";
import {AbstractMessage, Message} from "./message/message";

export function toImplementation(message: Message): Promise<AbstractMessage> {
    if (AbortBidImpl.isInstance(message))
        return Promise.resolve(new AbortBidImpl(message));
    if (SignUrlImpl.isInstance(message))
        return Promise.resolve(new SignUrlImpl(message as SignUrl));
    if (AcceptBidImpl.isInstance(message))
        return Promise.resolve(new AcceptBidImpl(message as AcceptBid));
    if (BidWithFiatImpl.isInstance(message))
        return Promise.resolve(new BidWithFiatImpl(message as BidWithFiat));
    if (BidWithFlowImpl.isInstance(message))
        return Promise.resolve(new BidWithFlowImpl(message as BidWithFlow));
    if (BuyWithFiatImpl.isInstance(message))
        return Promise.resolve(new BuyWithFiatImpl(message as BuyWithFiat));
    if (BuyWithFlowImpl.isInstance(message))
        return Promise.resolve(new BuyWithFlowImpl(message as BuyWithFlow));
    if (CreateLazyOfferImpl.isInstance(message))
        return Promise.resolve(new CreateLazyOfferImpl(message as CreateLazyOffer));
    if (CreateListOfferImpl.isInstance(message))
        return Promise.resolve(new CreateListOfferImpl(message as CreateListOffer));
    if (RejectBidImpl.isInstance(message))
        return Promise.resolve(new RejectBidImpl(message as RejectBid));
    if (SetBlockLimitImpl.isInstance(message))
        return Promise.resolve(new SetBlockLimitImpl(message as SetBlockLimit));
    if (SetItemPriceImpl.isInstance(message))
        return Promise.resolve(new SetItemPriceImpl(message as SetItemPrice));
    if (SetMarketFeeImpl.isInstance(message))
        return Promise.resolve(new SetMarketFeeImpl(message as SetMarketFee));
    if (CreateAssetImpl.isInstance(message))
        return Promise.resolve(new CreateAssetImpl(message as CreateAsset));
    if (LockSeriesImpl.isInstance(message))
        return Promise.resolve(new LockSeriesImpl(message as LockSeries));
    if (MintImpl.isInstance(message))
        return Promise.resolve(new MintImpl(message as Mint));
    if (SetMaxSupplyImpl.isInstance(message))
        return Promise.resolve(new SetMaxSupplyImpl(message as SetMaxSupply));
    return Promise.reject(`unknown message type ${message}`);
}