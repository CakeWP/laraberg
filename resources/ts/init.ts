import EditorSettings from "@van-ons/block-editor/dist/interfaces/editor-settings";
import { initializeEditor as defaultInitializeEditor } from "@van-ons/block-editor";
import defaultSettings from "./default-settings";

export const init = (
    target: string|HTMLInputElement|HTMLTextAreaElement,
    settings: EditorSettings = {},
    initializeEditor?: (element: HTMLElement, settings: any) => void
) => {
    let element

    if (typeof target === 'string') {
        element = document.getElementById(target) || document.querySelector(target)
    } else {
        element = target
    }

    if (!element) {
        return
    }

    let initializer = initializeEditor ? initializeEditor : defaultInitializeEditor; 

    initializer(element, { ...defaultSettings, ...settings })
}
