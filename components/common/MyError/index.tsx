import React from 'react'

const MyError = ({ errorMessage }: { errorMessage: string }) => {
    return (
        <div className="error text-[#767676] text-sm flex gap-1 items-center">
            <span className="material-symbols-rounded text-sm">
                info
            </span>
            <p>
                {errorMessage}
            </p>
        </div>
    )
}

export default MyError