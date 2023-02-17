import {type AppType} from "next/dist/shared/lib/utils";

import "@styles/globals.scss";

const MyApp: AppType = ({Component, pageProps}) => {

    return <div className="min-h-screen min-w-screen bg-[#F6F6F6] dark:bg-zinc-800">
        <Component {...pageProps} />
    </div>
};

export default MyApp;
