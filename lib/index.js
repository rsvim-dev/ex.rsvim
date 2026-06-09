import quit from "./quit.js";
import write from "./write.js";
import writeQuit from "./writeQuit.js";
const DefaultSetupOptions = {
    force: true,
};
function setup(opts) {
    opts = opts ?? DefaultSetupOptions;
    [quit, write, writeQuit].forEach((cmd) => {
        var o = { ...cmd.options };
        Object.assign(o, opts);
        Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, o);
    });
}
export default { setup };
