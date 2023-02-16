// @ts-nocheck
// @codegen
/* eslint-disable */

// @ts-ignore
module.exports = require("./icons").ICON_SET_IDS
    .map(setId => Object.keys(require(`react-icons/${setId}/index`)).map(id => (
        {id, setId}
    )))
    .flat()