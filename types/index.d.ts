export type Attributes = {
    bang: boolean;
    nargs: "0" | "1" | "*" | "+" | "?";
};
export type Options = {
    force: boolean;
    alias?: string;
};
export type ExDefinition = {
    name: string;
    callback: (ctx: any) => Promise<void>;
    attributes: Attributes;
    options: Options;
};
export type SetupOptions = {
    force: boolean;
};
declare function setup(setupOptions?: SetupOptions): void;
declare const _default: {
    setup: typeof setup;
};
export default _default;
