import React, { useState } from 'react'
import { RootState } from '@libs/store';
import { useDispatch, useSelector } from 'react-redux';
import MoreFiltersNav from '../MoreFilters/MoreFiltersNav';
import { EProductListingLayoutEnum, EProductSizeEnum } from '@modals/productListing/productListing.types';
import { setSearchColorFilter, setSearchLayout, setSearchPriceFilter, setSearchSizeFilter } from '@libs/features/productSearch/productSearchSlice';
import TabsBody from '@components/common/Tabs/TabsBody/TabsBody';
import ColorsFilter from '../MoreFilters/ColorsFilter';
import SizeFilter from '../MoreFilters/SizeFilter';
import PriceFilter from '../MoreFilters/PriceFilter';
import FilterCTA from '../MoreFilters/FilterCTA';
import { PRICERANGE } from '@contants';

const SearchFilter = () => {

    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);
    const { searchLayout, SearchColorFilter, SearchSizeFilter, SearchPriceFilter } = useSelector((state: RootState) => state.productSearch);

    const handleSetLayout = (layout: EProductListingLayoutEnum) => {
        dispatch(setSearchLayout(layout))
    }

    const handleSetActiveTab = (tab: number) => {
        setActiveTab(tab);
    }

    const handleColorSelected = (color: string) => {
        dispatch(setSearchColorFilter(color));
    }

    const handleSizeSelection = (size: EProductSizeEnum) => {
        dispatch(setSearchSizeFilter(size));
    }

    const handlePriceSelection = (value: [number, number]) => {
        dispatch(setSearchPriceFilter([value[0], value[1]] as [number, number]));
    }

    const handleClearFilter = () => {
        dispatch(setSearchColorFilter(null));
        dispatch(setSearchSizeFilter(null));
        dispatch(setSearchPriceFilter(PRICERANGE));
        setActiveTab(0);
    }

    const handleViewResult = () => {
        console.log('handle view results')
        setActiveTab(0);
    }

    return (
        <div className='w-full flex flex-wrap gap-3 justify-center sm:justify-between items-center max-w-7xl mx-auto mt-10'>
            <p className="searchresults__count">30 results found for “Shirts”</p>
            <div className="searchfilter flex items-center gap-5 relative">
                <MoreFiltersNav activeTab={activeTab} handleSetActiveTab={handleSetActiveTab} />
                <div className={`filter__body__container absolute top-12 right-0 ${activeTab === null && 'hidden'}`}>
                    <TabsBody show={activeTab === 1}>
                        <ColorsFilter colorSelected={SearchColorFilter} handleColorSelection={handleColorSelected} />
                    </TabsBody>
                    <TabsBody show={activeTab === 2}>
                        <SizeFilter sizeSelected={SearchSizeFilter} handleSizeSelection={handleSizeSelection} />
                    </TabsBody>
                    <TabsBody show={activeTab === 3}>
                        <PriceFilter priceSelected={SearchPriceFilter} handlePriceSelection={handlePriceSelection} />
                    </TabsBody>
                    {
                        activeTab !== 0 && <FilterCTA handleClearFilter={handleClearFilter} handleViewResult={handleViewResult} />
                    }
                </div>
                <div className='hidden md:flex items-center flex-wrap gap-4 relative'>
                    <div className={`layout__button hidden sm:flex pb-2 cursor-pointer ${searchLayout === 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(EProductListingLayoutEnum.TWO_COLUMN)}>
                        <span className="material-symbols-rounded rotate-90 text-base leading-4 sm:text-lg sm:leading-5">
                            view_agenda
                        </span>
                    </div>

                    {/* for big screen hide below button during 0 - 420px */}
                    <div className={`layout__button hidden sm:flex pb-2 cursor-pointer ${searchLayout !== 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(EProductListingLayoutEnum.FIVE_COLUMN)}>
                        <span className="material-symbols-rounded text-base leading-4 sm:text-lg sm:leading-5 ">
                            grid_view
                        </span>
                    </div>

                    {/* for small screen: hide below button during 420px - ~ */}
                    <div className={`layout__button sm:hidden pb-2 cursor-pointer ${searchLayout !== 2 && 'border-b border-black'} `} onClick={() => handleSetLayout(EProductListingLayoutEnum.ONE_COLUMN)}>
                        <span className="material-symbols-rounded text-base leading-4 sm:text-lg sm:leading-5 ">
                            grid_view
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilter