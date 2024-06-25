import { IMyCheckBox } from "@modals/login/login.types";
import { useField } from "formik";

const MyCheckBox = ({ className, children, ...props }: IMyCheckBox) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <div className={className}>
            <label className="checkbox flex gap-2">
                {/* when checked make bg as black */}
                <input {...field} {...props} type="checkbox" className='accent-black scale-[1.3]' />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-[#767676] text-sm flex gap-1 items-center">
                    <span className="material-symbols-rounded text-sm">
                        info
                    </span>
                    <p>
                        {meta.error}
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default MyCheckBox