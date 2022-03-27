const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*": "yarn format",
  "*.{ts,tsx}": [
    buildEslintCommand,
    // TODO: find way to use yarn type-check here to reuse scripts
    // currently using script makes not respecting tsconfig.json
    "tsc-files --pretty --noEmit",
  ],
};
