import { exec } from "child_process";
import esbuild from "esbuild";

esbuild
    .build({
        entryPoints: ["src/index.ts"],
        outfile: "dist/index.cjs",
        format: "cjs",
        minify: true,
        platform: "node",
        bundle: true,
    })
    .catch((e) => {
        console.log(e);
    });

esbuild
    .build({
        entryPoints: ["src/index.ts"],
        outfile: "dist/index.mjs",
        format: "esm",
        minify: true,
        platform: "node",
        bundle: true,
    })
    .catch((e) => {
        console.log(e);
    });

exec("tsc");
