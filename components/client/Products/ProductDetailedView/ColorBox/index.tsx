"use client";

import { setProductColor } from "@libs/features/cart/cartSlice";
import { useDispatch } from "react-redux";

interface IColorBox {
    color: {
        color: string;
        is_available: boolean;
    };
    active: boolean;
}

const ColorBox = ({ color, active }: IColorBox) => {

    const dispatch = useDispatch();

    const handleColorChange = () => {
        dispatch(setProductColor(color.color))
    }

    return (
        <span className={`px-5 py-4 cursor-pointer ${active && 'border-2 border-black'}`} style={{
            backgroundColor: color.color,
            display: color.is_available ? 'block' : 'none'
        }}
        onClick={handleColorChange}
        >
        </span>
    )
}

export default ColorBox;