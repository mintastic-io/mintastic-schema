export interface Message {
    dryRun?: boolean
}

export abstract class AbstractMessage implements Message {
    readonly dryRun: boolean

    protected constructor(message: Message) {
        this.dryRun = message.dryRun || false;
    }

    public abstract validate(source: "client" | "server"): Promise<Message>

    public abstract toServer(sub: string): Promise<Message>
}
