import MyOutlinedButton from "@components/common/MyOutlinedButton"
import { ButtonType } from "@modals/common/common.types"

interface IFilterCTA {
    handleViewResult: () => void;
    handleClearFilter: () => void;
}

const FilterCTA = ({handleViewResult, handleClearFilter}: IFilterCTA) => {
    
    const handleShowResult = () => {
        // call the API to get the filtered results
        console.log('View Results');
        handleViewResult();
    }

    return (
        <div className="filter__cta flex mt-3 gap-3">
            <MyOutlinedButton type={ButtonType.BUTTON} active={false} handleClick={handleClearFilter} className='bg-white'>CLEAR</MyOutlinedButton>
            <MyOutlinedButton type={ButtonType.BUTTON} active={false} handleClick={handleShowResult} className='bg-white'>VIEW RESULTS</MyOutlinedButton>
        </div>
    )
}

export default FilterCTA