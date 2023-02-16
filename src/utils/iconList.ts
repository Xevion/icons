// @codegen

/* eslint-disable */
// @ts-ignore
const identifiers = require("react-icons/lib").IconsManifest.map(pack => pack.id);
const icons = identifiers
// @ts-ignore
    .map(setId => Object.keys(require(`react-icons/${setId}/index`)).map(id => (
        `{id: "${id}", setId: "${setId}"}`
    )))
    .flat();

module.exports = `export default [${icons.join(", ")}];`;