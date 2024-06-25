import FilterBox from "./FilterBox";
import { EProductSizeEnum } from "@modals/productListing/productListing.types";

const SIZES: EProductSizeEnum[] = [EProductSizeEnum.XS, EProductSizeEnum.S, EProductSizeEnum.M, EProductSizeEnum.L, EProductSizeEnum.XL, EProductSizeEnum.XXL];

interface ISizeFilter {
    sizeSelected: EProductSizeEnum | null;
    handleSizeSelection: (size: EProductSizeEnum) => void;
}

const SizeFilter = ({ sizeSelected, handleSizeSelection }: ISizeFilter) => {

    return (
        <div className="size__filter grid grid-cols-3 sm:grid-cols-6 gap-0 w-max bg-white">
            {
                SIZES.map((size, index) => (
                    <FilterBox key={index} active={sizeSelected === size} handleClick={() => handleSizeSelection(size)}>
                        <p>{size}</p>
                    </FilterBox>
                ))
            }
        </div>
    )
}

export default SizeFilter;