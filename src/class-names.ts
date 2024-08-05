import { readdirSync, statSync, writeFileSync } from "fs";
import { trim, uniq } from "lodash";
import { resolve } from "path";

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = readdirSync(dir);

  let i = 0;
  (function next() {
    let file = list[i++];

    if (!file) return results;
    file = resolve(dir, file);

    const stat = statSync(file);
    if (stat && stat.isDirectory()) {
      const res = walk(file);
      results = results.concat(res);
      next();
    } else {
      results.push(file);
      next();
    }
  })();

  return results;
}

export function getAllClasses(): string[] {
  const list = walk(__dirname);

  if (!list) {
    return [];
  }

  const allStyleModules = list
    .filter((item: string) => item.endsWith(".styles.ts"))
    .map((item: string) => item.replaceAll(__dirname, ".").replace(".ts", ""))
    .map(require);

  const allClasses = uniq(
    allStyleModules
      .map((moduleExports) => {
        return Object.values(moduleExports)
          .map((moduleExport) => {
            if (typeof moduleExport === "function") {
              return moduleExport().trim();
            } else {
              return String(moduleExport);
            }
          })
          .flat();
      })
      .flat()
      .map((item) => item.replaceAll("\n", ""))
      .map(trim)
      .join(" ")
      .split(" ")
      .filter(Boolean),
  );

  return allClasses;
}

export function generateClassNames() {
  const code = JSON.stringify(getAllClasses());
  writeFileSync("src/class-names-used.json", code);
}
