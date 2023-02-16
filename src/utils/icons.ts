import * as ReactIconsLib from "react-icons/lib";
import type {IconManifest} from "react-icons";

// @ts-ignore TS7053 ;; This reaches into React Icon's internals so it really cannot be made typesafe for our purposes.
export const ALL_ICON_SETS: IconManifest[] = ReactIconsLib["IconsManifest"] as IconManifest[];

// An object referencing each of the icon sets, keyed by its 'id' (two/three letter identifier).
export const ALL_ICON_SETS_BY_ID: Record<string, IconManifest> = Object.fromEntries(ALL_ICON_SETS.map(set => [set.id, set]));

// A list of all the icon sets.
export const ICON_SET_IDS: string[] = Object.keys(ALL_ICON_SETS_BY_ID);

// A getter for code splitting loaders.
export const getIconById = (id: string): IconManifest | undefined => ALL_ICON_SETS_BY_ID[id];