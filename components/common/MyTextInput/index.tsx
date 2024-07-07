import { IMyTextInput } from "@modals/login/login.types";
import { useField } from "formik";

const MyTextInput = ({ label, id, name, type, className, onFocus  }: IMyTextInput) => {

    const [field, meta] = useField({ name, type });

    return (
        <div className={`relative z-0 w-full ${className}`}>
            <input
                id={id}
                type={type}
                {...field}
                placeholder=""
                autoComplete="off"
                className="simpleinput block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                onFocus={onFocus}
            />
            <label htmlFor={id} className="simpleinputlabel absolute duration-300 -top-1 -z-1 origin-0 text-gray-500">{label}</label>
         
        </div>
    )
}


export default MyTextInput