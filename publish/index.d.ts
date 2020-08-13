export declare const animateUriFactory: () => {
    /**
     *
     * @param {{duration?: number,shouldPushState?: boolean}}
     */
    create({ duration, shouldPushState, }?: {
        duration?: number | undefined;
        shouldPushState?: boolean | undefined;
    }): {
        start: (to: string, startWith: string | undefined) => void;
        stop: () => void;
    };
    /**
     *
     * @param {string} to
     * @param {string | undefined} startWith
     */
    start(to: string, startWith: string | undefined): void;
    stop(): void;
};
//# sourceMappingURL=index.d.ts.map