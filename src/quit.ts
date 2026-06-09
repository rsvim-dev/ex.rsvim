import type { Definition } from ".";

async function quit(): Promise<void> {
  Rsvim.rt.exit();
  Rsvim.cmd.echo("Bye");
}

const _default: Definition = {
  name: "quit",
  callback: quit,
  attributes: { bang: false, nargs: "0" },
  options: { alias: "q", force: true },
};

export default _default;
