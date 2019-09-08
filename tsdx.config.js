const visualizer = require("rollup-plugin-visualizer");
const ts = require("@wessberg/rollup-plugin-ts");
const multiEntry = require("rollup-plugin-multi-entry");

const now = new Date(Date.now());

function config(pjson) {
  return {
    rollup(config, opts) {
      const { plugins } = config;

      // swap out rollup-plugin-typescript2
      config.plugins = plugins.map(p => {
        if (p && p.name === "rpt2") {
          return ts({
            tsconfig: tsconfig => ({
              ...tsconfig,
              target: "esnext",
              sourceMap: true,
              declaration: true,
              jsx: "react"
            }),
            transpiler: "babel"
          });
        }
        return p;
      });
      config.plugins.shift(multiEntry());
      config.plugins.push(
        visualizer({
          filename: `${pjson.name}.stats.html`,
          title: `${pjson.name} Rollup Report (${now.toDateString()})`,
          sourcemap: true
        })
      );

      return { ...config };
    }
  };
}

module.exports = config;
