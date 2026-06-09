import type { ExDefinition } from ".";
import type { RsvimCmd } from "rsvim-types";

async function write(ctx: RsvimCmd.CommandContext): Promise<void> {
  const bufId = ctx.currentBufferId;
  try {
    const written = Rsvim.buf.writeSync(bufId);
    Rsvim.cmd.echo(
      `Saved buffer ${bufId}, ${written} bytes have been written.`,
    );
  } catch (exception) {
    Rsvim.cmd.echo(`Failed to save buffer ${bufId}: ${exception}.`);
  }
}

const _default: ExDefinition = {
  name: "write",
  callback: write,
  attributes: { bang: false, nargs: "0" },
  options: { alias: "w", force: true },
};

export default _default;
