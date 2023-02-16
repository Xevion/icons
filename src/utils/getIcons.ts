import codegen from "babel-plugin-codegen/macro";
import type {IconType} from "react-icons";

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
// language=JavaScript
const fn = codegen`
    const {IconsManifest} = require("react-icons/lib/cjs");
    let codes = "(function (id) { switch (id) {";
    IconsManifest.forEach(({id}) => {
        codes += 'case "' + id + '":\\n    return import(/* webpackChunkName: "' + id + '" */ "react-icons/' + id + '/index");\\n'
    })
    codes += '}})';
    module.exports = codes;  // module.exports = "import('react-icons/fa/index')"
`;
/* eslint-enable */

export function getIcons(id: string): Promise<{[id: string]: IconType}> {
    /*
    Dynamic Import with improved performance.
    Macros are used to avoid bundling unnecessary modules.
    Similar to this code
    ```
    return import(`react-icons/${iconsId}/index`);
    ```
    */

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    return fn(id);
}