import {useState, ChangeEvent, FormEvent} from "react";

//TODO: possibly better here to use IFormElement? can keep track off if specific element is valid
// and if its required for better handleSubmit?
type FormType = {
    [name: string]: string;
};

const useForm = (): [
    FormType,
    (event: ChangeEvent<HTMLSelectElement>) => void,
    (event: FormEvent) => void
] => {
    const value: FormType = {};
    const [state, setState] = useState(value);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.persist();
        setState((state) => ({...state, [e.target.name]: e.target.value}));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(state);
    };

    return [state, handleChange, handleSubmit];
};

export default useForm;
