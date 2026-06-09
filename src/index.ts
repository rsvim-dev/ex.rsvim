import quit from "./quit.js";
import write from "./write.js";
import writeQuit from "./writeQuit.js";

export type ExAttributes = {
  bang: boolean;
  nargs: "0" | "1" | "*" | "+" | "?";
};

export type ExOptions = {
  force: boolean;
  alias?: string;
};

export type ExDefinition = {
  name: string;
  callback: (ctx: any) => Promise<void>;
  attributes: ExAttributes;
  options: ExOptions;
};

export type SetupOptions = {
  force: boolean;
};

const DefaultSetupOptions: SetupOptions = {
  force: true,
};

function setup(setupOptions?: SetupOptions): void {
  setupOptions = setupOptions ?? DefaultSetupOptions;

  [quit, write, writeQuit].forEach((cmd) => {
    var options: ExOptions = { ...cmd.options };
    Object.assign(options, setupOptions);
    Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, options);
  });
}

export default { setup };
