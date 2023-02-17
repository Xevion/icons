import type {FunctionComponent} from "react";
import DisplayIconSingle from "@components/render/DisplayIconSingle";

type Props = {
    icons: { id: string, setId: string }[];
};

const IconCatalog: FunctionComponent<Props> = ({icons}) => {
    return <div
        className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-11 rounded gap-4 p-1.5 rounded overflow-x-clip mb-5">{icons.map(({id, setId}) => {
        return <DisplayIconSingle key={id + setId} id={id} setId={setId}/>
    })}
    </div>
}

export default IconCatalog;