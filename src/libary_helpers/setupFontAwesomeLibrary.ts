import {library} from "@fortawesome/fontawesome-svg-core";
import {faLeaf} from "@fortawesome/free-solid-svg-icons/faLeaf";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons/faQuestionCircle";

export default function setupFontAwesomeLibrary(): void {
    library.add(faLeaf, faSpinner, faQuestionCircle);
}
