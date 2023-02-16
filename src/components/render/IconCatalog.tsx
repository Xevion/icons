import type {FunctionComponent} from "react";
import DisplayIconSingle from "@components/render/DisplayIconSingle";

const regex = /^([A-Z][a-z]{1,})[A-Z]\w+$/;

type Props = {
    icons: { id: string, setId: string }[];
};

const IconCatalog: FunctionComponent<Props> = ({icons}) => {
    return <div
        className="flex flex-wrap rounded gap-y-4 p-1.5 rounded overflow-x-clip mb-5">{icons.map(({id, setId}) => {
        return <DisplayIconSingle key={id + setId} id={id} setId={setId}/>
    })}
    </div>
}

export default IconCatalog;