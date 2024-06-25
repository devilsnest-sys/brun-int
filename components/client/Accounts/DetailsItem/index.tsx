interface IDetailsItem {
    label: string;
    value: string;
}

const DetailsItem = ({ label, value }: IDetailsItem) => {
    return (
        <div className='max-w-[427px] md:w-[427px]'>
            <span className='text-sm text-[#8E8E8E]'>{label}</span>
            <p className="p-1 border-b">{value}</p>
        </div>
    )
}

export default DetailsItem;