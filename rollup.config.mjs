import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          noEmitHelpers: true,
          importHelpers: true,
        },
      },
    }),
    terser(),
  ],
};
