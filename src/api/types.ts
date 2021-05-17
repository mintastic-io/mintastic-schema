import jwtDecode, {JwtPayload} from "jwt-decode";

export type Currency = "eur" | "usd" | "flow";

export interface Token {
    getCreatorId(): string
    isExpired(): boolean
    getAuthorization(onRefresh: (Token) => void): Promise<string>
    getPayload(): Promise<TokenPayload>
}

export class IdToken implements Token {
    private readonly token: string
    private readonly payload: TokenPayload

    constructor(token: string) {
        this.token = token;

        const parsed = jwtDecode<JwtPayload>(token);
        this.payload = {
            sub: parsed.sub!,
            exp: parsed.exp!,
            email: parsed["email"],
            email_verified: parsed["email_verified"]
        }
    }

    getCreatorId(): string {
        return this.payload.sub
    }

    isExpired(): boolean {
        const time = Math.trunc(new Date().getTime() / 1000) + (5 * 60)
        return time > this.payload.exp;
    }

    getAuthorization(): Promise<string> {
        return Promise.resolve(`Bearer ${this.token}`);
    }

    getPayload(): Promise<TokenPayload> {
        return Promise.resolve(this.payload);
    }

}

export interface TokenPayload {
    sub: string
    exp: number
    email: string
    email_verified: boolean
}