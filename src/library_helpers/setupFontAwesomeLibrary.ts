import {library} from "@fortawesome/fontawesome-svg-core";
import {faLeaf} from "@fortawesome/free-solid-svg-icons/faLeaf";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons/faQuestionCircle";

// This sets up font awesome and adds only the icons we need to the library, which reduces
// the end bundle size as originally the entire library of SVGs was being included (!)
export default function setupFontAwesomeLibrary(): void {
    library.add(faLeaf, faSpinner, faQuestionCircle, faBars);
}
