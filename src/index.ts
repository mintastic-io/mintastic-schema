export {Message} from "./message/message";
export {AbstractMessage} from "./message/message";

// cloud messages
export {SignUrl, SignUrlImpl} from "./message/cloud/sign-url";

// market messages
export {AbortBid, AbortBidImpl} from "./message/market/abort-bid";
export {AcceptBid, AcceptBidImpl} from "./message/market/accept-bid";
export {BidWithFiat, BidWithFiatImpl} from "./message/market/bid-with-fiat";
export {BidWithFlow, BidWithFlowImpl} from "./message/market/bid-with-flow";
export {BuyWithFiat, BuyWithFiatImpl} from "./message/market/buy-with-fiat";
export {BuyWithFlow, BuyWithFlowImpl} from "./message/market/buy-with-flow";
export {CreateLazyOffer, CreateLazyOfferImpl} from "./message/market/create-lazy-offer";
export {CreateListOffer, CreateListOfferImpl} from "./message/market/create-list-offer";
export {RejectBid, RejectBidImpl} from "./message/market/reject-bid";
export {SetBlockLimit, SetBlockLimitImpl} from "./message/market/set-block-limit";
export {SetItemPrice, SetItemPriceImpl} from "./message/market/set-item-price";
export {SetMarketFee, SetMarketFeeImpl} from "./message/market/set-market-fee";

// nft messages
export {CreateAsset, CreateAssetImpl} from "./message/nft/create-asset";
export {LockSeries, LockSeriesImpl} from "./message/nft/lock-series";
export {Mint, MintImpl} from "./message/nft/mint";
export {SetMaxSupply, SetMaxSupplyImpl} from "./message/nft/set-max-supply";

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
import createHmac from "create-hmac/browser";

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

export function getAssetId(creatorId: string, assetName: string): string {
    const hmac = createHmac('sha256', Buffer.from(creatorId));
    hmac.update(assetName)
    const hex = hmac.digest("hex").toString("utf-8");

    // create uuid format asset id
    const segment1 = hex.substring(0, 8);
    const segment2 = hex.substring(8, 12);
    const segment3 = hex.substring(12, 16);
    const segment4 = hex.substring(16, 20);
    const segment5 = hex.substring(20, 32);
    return `${segment1}-${segment2}-${segment3}-${segment4}-${segment5}`
}