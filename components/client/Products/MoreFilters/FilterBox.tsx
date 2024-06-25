interface IFilterBox {
    children: React.ReactNode;
    active: boolean;
    handleClick: () => void;
}

const FilterBox = ({ active, children, handleClick }: IFilterBox) => {
    return (
        <div className={`filter__box p-2 flex flex-col justify-center items-center w-20 h-16 cursor-pointer ${active ? 'border font-semibold' : ' shadow-black'} border-black`} style={{
            boxShadow: 'inset 0px 0px 1px 0px black'
        }}
        onClick={handleClick}
        >
            {children}
        </div>
    )
}

export default FilterBox;