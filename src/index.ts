import quit from "./quit.js";
import write from "./write.js";

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

  [quit, write].forEach((cmd) => {
    let options = cmd.options;
    if (typeof setupOptions.force === "boolean") {
      options.force = setupOptions.force;
    }
    Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, options);
  });
}

export default { setup };
