import MyOutlinedButton from "@components/common/MyOutlinedButton";
import { ButtonType } from "@modals/common/common.types";

interface IMoreFiltersNav {
    activeTab: number;
    handleSetActiveTab: (tab: number) => void;
}

const MoreFiltersNav = ({ activeTab, handleSetActiveTab }: IMoreFiltersNav) => {
    return (
        <div className="morefiltersnav flex items-center gap-2">
            <MyOutlinedButton handleClick={() => handleSetActiveTab(1)} type={ButtonType.BUTTON} active={activeTab === 1} >COLOUR</MyOutlinedButton>
            <MyOutlinedButton handleClick={() => handleSetActiveTab(2)} type={ButtonType.BUTTON} active={activeTab === 2} >SIZE</MyOutlinedButton>
            <MyOutlinedButton handleClick={() => handleSetActiveTab(3)} type={ButtonType.BUTTON} active={activeTab === 3} >PRICE</MyOutlinedButton>
        </div>
    )
}

export default MoreFiltersNav;