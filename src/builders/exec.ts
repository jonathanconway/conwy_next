import { chain } from "lodash";

import * as builders from "./index";

function generateBuilderCLIName(builderFnName: string) {
  return chain(builderFnName).kebabCase().replace("build-", "");
}

const builderNames = chain(Object.entries(builders))
  .map(([builderFnName, builderFn]) => [
    generateBuilderCLIName(builderFnName),
    builderFn,
  ])
  .fromPairs()
  .value();

const builderArg = process.argv[2];

builderNames[builderArg]();
