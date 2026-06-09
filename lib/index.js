import quit from "./quit.js";
import write from "./write.js";
import writeQuit from "./writeQuit.js";
const DefaultSetupOptions = {
    force: true,
};
function setup(setupOptions) {
    setupOptions = setupOptions ?? DefaultSetupOptions;
    [quit, write, writeQuit].forEach((cmd) => {
        var options = { ...cmd.options };
        Object.assign(options, setupOptions);
        Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, options);
    });
}
export default { setup };
