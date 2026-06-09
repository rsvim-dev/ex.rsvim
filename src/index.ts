import quit from "./quit.js";
import write from "./write.js";
import writeQuit from "./writeQuit.js";

export type Attributes = {
  bang: boolean;
  nargs: "0" | "1" | "*" | "+" | "?";
};

export type Options = {
  force: boolean;
  alias?: string;
};

export type Definition = {
  name: string;
  callback: (ctx: any) => Promise<void>;
  attributes: Attributes;
  options: Options;
};

export type SetupOptions = {
  force: boolean;
};

const DefaultSetupOptions: SetupOptions = {
  force: true,
};

function setup(setupOpts?: SetupOptions): void {
  setupOpts = setupOpts ?? DefaultSetupOptions;

  [quit, write, writeQuit].forEach((cmd) => {
    var opts: Options = { ...cmd.options };
    Object.assign(opts, setupOpts);
    Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, opts);
  });
}

export default { setup };
