import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProductCategory, IProductSubCategory } from "@modals/admin";
import { setSelectedSubCategory } from "@libs/features/admin/addproduct.slice";
import { RootState } from "@libs/store";

interface ISubCategory {
    title: string;
    options: IProductSubCategory[];
    isLoading: boolean;
}

const SubCategory = ({ title, options, isLoading }: ISubCategory) => {
    
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const selectedCategoryID = useSelector((state:RootState) => state.adminAddProductSlice.selectedCategory);

    // check if the selected category is changed then reset the selected subcategory
    React.useEffect(() => {
        setValue('');
        dispatch(setSelectedSubCategory(''))
    }, [selectedCategoryID])

    const handleSelectValue = (option: IProductSubCategory) => {
        setOpen(false);
        setValue(option.subcategory_name);
        dispatch(setSelectedSubCategory(option.id))
    }

    return (
        <div className='flex flex-col gap-4 border border-gray-200 p-2 uppercase cursor-pointer'>
            <div className="select-header flex justify-between items-center w-full" onClick={() => setOpen(!open)}>
                <p>{value ? value : title}</p>
                <span className={`material-symbols-rounded transition-all duration-200 ${open && 'rotate-180'}`}>
                    expand_more
                </span>
            </div>
            <div className={`select-body pt-2 ${open ? 'flex flex-col border-t border-gray-200' : 'hidden'}`}>
                {
                    isLoading
                        ? <p>Loading...</p>
                        : options.length === 0
                            ? <p>No Category found</p>
                            : options.map((option, index) => (
                                <div key={index} className='select-option flex items-center gap-3 cursor-pointer' onClick={() => handleSelectValue(option)}>
                                    <p>{option.subcategory_name}</p>
                                </div>
                            ))
                }
            </div>
        </div>
    )
}

export default SubCategory;