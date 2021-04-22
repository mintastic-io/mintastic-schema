export interface Asset {
    assetId?: string
    creatorId?: string
    content: string | {}
    address: string
    royalty: string
    series: number
    type: number
}

export type Currency = "eur" | "usd" | "flow";