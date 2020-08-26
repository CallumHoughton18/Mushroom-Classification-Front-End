import {useState, ChangeEvent, FormEvent} from "react";
import {FormContents, GenericFormElement} from "../types";

/**
 * Minimal hook for managing form state and form data.
 * @param submitCallback callback to fire when form is submitted.
 */
const useForm = (
    submitCallback: (data: FormContents) => void
): [FormContents, (event: ChangeEvent<GenericFormElement>) => void, (event: FormEvent) => void] => {
    const value: FormContents = {};
    const [state, setState] = useState(value);

    const handleChange = (e: ChangeEvent<GenericFormElement>) => {
        e.persist();
        // cache value, as can it can possibly change when changing form select very quickly.
        // as seen in the ClassificationForm.int.test integration test
        const {name, value} = e.target;
        setState((state) => ({...state, [name]: value}));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        submitCallback(state);
    };

    return [state, handleChange, handleSubmit];
};

export default useForm;
