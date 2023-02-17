import {type NextPage} from "next";
import Head from "next/head";
// @ts-ignore
import iconList from "@utils/iconList";
import {useEffect, useMemo, useState} from "react";
import {useDebounce} from "usehooks-ts";
import {useHotkeys} from 'react-hotkeys-hook'
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import IconCatalog from "@components/render/IconCatalog";
import NoSSR from 'react-no-ssr';
import InfiniteScroll from "react-infinite-scroll-component";
import useFocus from "@utils/useFocus";
import { OGP } from "react-ogp";
import {env} from "../env.mjs";

export type IconIdentifierPair = { id: string, setId: string };
const icons = iconList as IconIdentifierPair[];

const Home: NextPage = () => {
    const [query, setQuery] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [timing, setTiming] = useState<number>(0);
    const debouncedQuery = useDebounce(query, 800);

    useEffect(() => {
        setShowLoading(query.length != 0);
    }, [query]);


    const allFilteredIcons = useMemo(() => {
        const start = new Date();
        const results = debouncedQuery.length == 0 ? [] : icons.filter(({id}) => id.toLowerCase().indexOf(query) !== -1);
        const end = new Date();

        // const results = fuse.search(query, {limit: maximumResults});
        setShowLoading(false);
        setTiming(end.getTime() - start.getTime());
        return results;
    }, [debouncedQuery]);

    useEffect(() => {
        setLazyIcons(allFilteredIcons.slice(0, 100))
    }, [allFilteredIcons]);

    useHotkeys(['ctrl+k', 'ctrl+/'], () => {
        focusSearch();
    }, {preventDefault: true})
    const [searchRef, focusSearch] = useFocus<HTMLInputElement>()
    const [lazyIcons, setLazyIcons] = useState<IconIdentifierPair[]>([]);

    const infiniteScroll = useMemo(() => <InfiniteScroll hasMore={lazyIcons.length < allFilteredIcons.length}
                                                         loader={<span>Loading...</span>}
                                                         dataLength={lazyIcons.length}
                                                         next={() => {
                                                             const newLength = Math.min(lazyIcons.length + 300, allFilteredIcons.length)
                                                             setLazyIcons(allFilteredIcons.slice(0, newLength))
                                                         }}>
        <IconCatalog icons={lazyIcons}/>
    </InfiniteScroll>, [lazyIcons]);

    return (
        <>
            <Head>
                <title>Icons</title>
                <link rel="icon" href="/favicon.ico"/>
                <OGP
                    url={env.NEXT_PUBLIC_APP_URL as string}
                    title="Icons"
                    description="A custom search engine for all of the icons in the React-Icons library."
                    siteName="icons.xevion.dev"
                    image="http://example.com/cover.jpg"
                />
            </Head>
            <main className="flex flex-col items-center m-auto p-6 max-w-[130ch]">
                <div className="flex max-w-[60ch] px-1 py-2 m-4">
                    <input
                        ref={searchRef}
                        autoFocus
                        className="grow bg-transparent ring-0 outline-none text-xl"
                        placeholder="Search for an icon..."
                        onChange={({target: {value}}) => setQuery(value)}
                        value={query}
                    />
                    <NoSSR>
                        <span className="shrink text-xl text-zinc-500">
                            {showLoading ? <AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>
                                : (query.length == 0
                                    ? icons.length
                                    : allFilteredIcons.length)}
                        </span>
                        {
                            timing !== 0
                                ? <span className="ml-2 shrink text-lg text-zinc-400">{timing}ms</span>
                                : null
                        }
                    </NoSSR>
                </div>
                <div>
                    {infiniteScroll}
                </div>
            </main>
        </>
    );
};

export default Home;
