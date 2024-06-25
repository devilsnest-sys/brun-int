import React from 'react'

interface IAnalyticsCard {
    title: string;
    value: string;
}

const AnalyticsCard = ({ title, value }: IAnalyticsCard) => {
    return (
        <div className="orderanalytics-card bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-base text-[#AFAFAF]">{title}</h3>
            <p className="text-2xl">{value}</p>
        </div>
    )
}


export default AnalyticsCard