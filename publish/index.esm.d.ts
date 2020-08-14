interface AnimationConfig {
    duration?: number;
    shouldPushState?: boolean;
    backspacingEmoji?: string;
    buildingEmoji?: string;
}
export declare const EmojiRegExp: RegExp;
export declare const animateUriFactory: (config?: AnimationConfig) => {
    /**
     *
     * @param {string} to
     * @param {string | undefined} startWith
     */
    start(to: string, startWith?: string | undefined): Promise<unknown>;
    stop(): void;
    cancel(): void;
} | undefined;
export declare const bindAllLink: (config?: AnimationConfig | undefined) => {
    /**
     *
     * @param {string} to
     * @param {string | undefined} startWith
     */
    start(to: string, startWith?: string | undefined): Promise<unknown>;
    stop(): void;
    cancel(): void;
} | undefined;
export {};
