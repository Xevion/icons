import {type RefObject, useRef} from "react";

const useFocus = <ElementReference extends HTMLInputElement>(): [RefObject<ElementReference>, () => void] => {
    const elementReference = useRef<ElementReference>(null)
    const setFocus = () => {
        elementReference.current?.focus()
    }

    return [elementReference, setFocus]
}

export default useFocus;