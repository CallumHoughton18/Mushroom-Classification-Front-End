import {useState, ChangeEvent, FormEvent} from "react";
import {FormContents, GenericFormElement} from "../types";

const useForm = (
    submitCallback: (data: FormContents) => void
): [FormContents, (event: ChangeEvent<GenericFormElement>) => void, (event: FormEvent) => void] => {
    const value: FormContents = {};
    const [state, setState] = useState(value);

    const handleChange = (e: ChangeEvent<GenericFormElement>) => {
        e.persist();
        setState((state) => ({...state, [e.target.name]: e.target.value}));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        submitCallback(state);
    };

    return [state, handleChange, handleSubmit];
};

export default useForm;
