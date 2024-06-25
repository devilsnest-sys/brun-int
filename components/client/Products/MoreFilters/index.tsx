import FilterCTA from './FilterCTA';
import SizeFilter from './SizeFilter';
import React, { useState } from 'react'
import PriceFilter from './PriceFilter';
import { RootState } from '@libs/store';
import ColorsFilter from './ColorsFilter';
import MoreFiltersNav from './MoreFiltersNav';
import { useDispatch, useSelector } from 'react-redux';
import TabsBody from '@components/common/Tabs/TabsBody/TabsBody';
import { setProductListingColorSelected, setProductListingPriceSelected, setProductListingSizeSelected } from '@libs/features/productListing/productListingSlice';
import { PRICERANGE } from '@contants';

const MoreFilters = () => {

    const [activeTab, setActiveTab] = useState(0);
    const dispatch = useDispatch();

    const { productListingColorFilter, productListingSizeFilter, productListingPriceFilter } = useSelector((state: RootState) => state.productListing);

    const handleSetActiveTab = (tab: number) => {
        setActiveTab(tab);
    }

    const handleColorSelection = (color: string) => {
        dispatch(setProductListingColorSelected(color));
    }

    const handleSizeSelection = (size: string) => {
        console.log(size);
    }

    const handlePriceSelection = (price: [number, number]) => {
        console.log(price);
    }

    const handleClearFilter = () => {
        dispatch(setProductListingColorSelected(null));
        dispatch(setProductListingSizeSelected(null));
        dispatch(setProductListingPriceSelected(PRICERANGE));
        setActiveTab(0);
    }

    const handleViewResult = () => {
        console.log('handle view results')
        setActiveTab(0);
    }

    return (
        <div className="more__filters relative">
            <MoreFiltersNav activeTab={activeTab} handleSetActiveTab={handleSetActiveTab} />
            <div className={`filter__body__container absolute top-12 left-0 ${activeTab === null && 'hidden'}`}>
                <TabsBody show={activeTab === 1}>
                    <ColorsFilter colorSelected={productListingColorFilter} handleColorSelection={handleColorSelection} />
                </TabsBody>
                <TabsBody show={activeTab === 2}>
                    <SizeFilter sizeSelected={productListingSizeFilter} handleSizeSelection={handleSizeSelection} />
                </TabsBody>
                <TabsBody show={activeTab === 3}>
                    <PriceFilter priceSelected={productListingPriceFilter} handlePriceSelection={handlePriceSelection} />
                </TabsBody>
                {
                    activeTab !== 0 && <FilterCTA handleClearFilter={handleClearFilter} handleViewResult={handleViewResult} />
                }
            </div>
        </div>
    )
}

export default MoreFilters