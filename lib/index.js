import quit from "./quit.js";
import write from "./write.js";
const DefaultSetupOptions = {
    force: true,
};
function setup(setupOptions) {
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
