import jwtDecode, {JwtPayload} from "jwt-decode";

export type Currency = "eur" | "usd" | "flow";

export interface Token {
    getCreatorId(): string
    isExpired(): boolean
    // TODO: remove refresh flag
    getAuthorization(onRefresh: (Token) => void, refresh: boolean): Promise<string>
    getPayload(): {}
    getUsername(): string
    getGroups(): string[]
}

export class IdToken implements Token {
    private readonly token: string
    private readonly payload: {}

    constructor(token: string) {
        this.token = token;
        this.payload = jwtDecode<JwtPayload>(token);
    }

    getCreatorId = () => this.payload["sub"];
    getAuthorization = () => Promise.resolve(`Bearer ${this.token}`);
    getPayload = () => this.payload;
    getGroups = () => this.payload["cognito:groups"];
    getUsername = () => this.payload["cognito:username"];

    isExpired(): boolean {
        const time = Math.trunc(new Date().getTime() / 1000) + (5 * 60)
        return time > this.payload["exp"];
    }

}
