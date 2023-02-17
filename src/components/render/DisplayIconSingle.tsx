import type {FunctionComponent, ReactNode} from "react";
import loadable from "@loadable/component";
import {getIcons} from "@utils/getIcons";
import type {IconType} from "react-icons";
import {BiError} from "react-icons/bi";
import {BsQuestionCircle} from "react-icons/bs";
import {classNames} from "@utils/helpers";

type DisplayIconSingleProps = {
    id: string;
    setId: string;
};

type IconInternalProps = {
    children?: ReactNode;
    label: ReactNode;
    onClick?: () => void;
};

const IconInternal: FunctionComponent<IconInternalProps> = ({label, children, onClick}) => {
    return <div
        className={classNames(onClick != undefined ? "cursor-pointer" : null, "group w-32 flex flex-col items-center overflow-clip group-hover:overflow-visible group-hover:z-40")}
        onClick={onClick}>
        {children ?? <BsQuestionCircle className="w-8 h-8"/>}
        <span
            className="px-1 mt-1 text-[10px]">
        {label}
        </span>
    </div>
}

const DisplayIconSingle: FunctionComponent<DisplayIconSingleProps> = ({setId, id}) => {
    // eslint-disable-next-line
    const IconSet = loadable.lib(() => getIcons(setId));

    return <IconSet fallback={<IconInternal label="..."/>}>
        {(module) => {
            const Icon: IconType | undefined = (module as { [icon: string]: IconType })[id] ?? BiError;
            return <IconInternal label={id} onClick={() => {
                void navigator.clipboard.writeText(`import {${id}} from "react-icons/${setId}";`)
            }}>
                <Icon className="text-slate-700 group-hover:text-slate-900 group-hover:scale-125 transition-transform w-8 h-8"/>
            </IconInternal>

        }}
    </IconSet>
}
export default DisplayIconSingle;