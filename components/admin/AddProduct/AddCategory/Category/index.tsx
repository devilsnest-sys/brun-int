import React from "react";
import { IProductCategory } from "@modals/admin";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "@libs/features/admin/addproduct.slice";

interface ICategory {
    title: string;
    options: IProductCategory[];
    handleClick: (value: string) => void;
}

const Category = ({ title, options, handleClick }: ICategory) => {

    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleSelectValue = (option: IProductCategory) => {
        setValue(option.category_name);
        dispatch(setSelectedCategory(option.id));
        setOpen(false);
        handleClick(option.id)
    }

    return (
        <div className='flex flex-col gap-4 border border-gray-200 p-2 uppercase'>
            <div className="select-header flex justify-between items-center w-full cursor-pointer select-none" onClick={() => setOpen(!open)}>
                <p>{value ? value : title}</p>
                <span className={`material-symbols-rounded transition-all duration-200 ${open && 'rotate-180'}`}>
                    expand_more
                </span>
            </div>
            <div className={`select-body pt-2 ${open ? 'flex flex-col border-t border-gray-200' : 'hidden'}`}>
                {
                    options.length === 0
                    ? <p>No Category found</p>
                    : options.map((option, index) => (
                        <div key={index} className='select-option flex items-center gap-3 cursor-pointer' onClick={() => handleSelectValue(option)}>
                            <p>{option.category_name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category;