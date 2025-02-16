import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: false,
            name: "ReactLoadTimeAnalyzer",
            sourcemap: true,
            globals: { react: "React" },
            exports: "named",
        },
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: false,
            name: "ReactLoadTimeAnalyzer",
            sourcemap: true,
            globals: { react: "React" },
            exports: "named",
        }
    ],
    external: ["react", "react-dom"],
    plugins: [
        resolve(),
        commonjs({
            include: /\/node_modules\//,
        }),
        typescript({
            exclude: ["**/__tests__", "**/*.test.ts", "**/__typetest__"],
        }),
        terser({
            output: { comments: false },
            // compress: {
            //     // drop_console: true,
            // },
        }),
    ],
};
