export async function writeQuit(ctx) {
    const bufId = ctx.currentBufferId;
    try {
        const written = Rsvim.buf.writeSync(bufId);
        Rsvim.cmd.echo(`Saved buffer ${bufId}, ${written} bytes have been written.`);
        Rsvim.rt.exit();
        Rsvim.cmd.echo("Bye");
    }
    catch (exception) {
        Rsvim.cmd.echo(`Failed to save buffer ${bufId}: ${exception}.`);
    }
}
const _default = {
    name: "writeQuit",
    callback: writeQuit,
    attributes: { bang: false, nargs: "0" },
    options: { alias: "wq", force: true },
};
export default _default;
