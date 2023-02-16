import type {FunctionComponent, ReactNode} from "react";
import loadable from "@loadable/component";
import {getIcons} from "@utils/getIcons";
import type {IconType} from "react-icons";
import {BiError} from "react-icons/bi";
import {BsQuestionCircle} from "react-icons/bs";

type DisplayIconSingleProps = {
    id: string;
    setId: string;
};

type IconInternalProps = {
    children?: ReactNode;
    label: ReactNode;
};

const IconInternal: FunctionComponent<IconInternalProps> = ({label, children}) => {
    return <div
        className="w-32 flex flex-col items-center overflow-clip hover:overflow-visible hover:z-40">
        {children ?? <BsQuestionCircle className="w-8 h-8" />}
        <span
            className="px-1 hover:bg-zinc-100 mt-1 text-[10px] hover:rounded hover:font-semibold">
        {label}
        </span>
    </div>
}

const DisplayIconSingle: FunctionComponent<DisplayIconSingleProps> = ({setId, id}) => {
    // eslint-disable-next-line
    const IconSet = loadable.lib(() => getIcons(setId));

    return <IconSet fallback={<IconInternal label={"Loading..."} />} >
        {(module) => {
            const Icon: IconType | undefined = (module as { [icon: string]: IconType })[id] ?? BiError;
            return <IconInternal label={id}>
                <Icon className="text-slate-700 hover:text-slate-900 hover:scale-125 transition-transform w-8 h-8"/>
            </IconInternal>

        }}
    </IconSet>
}
export default DisplayIconSingle;