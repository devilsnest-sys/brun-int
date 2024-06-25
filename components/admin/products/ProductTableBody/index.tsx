import ProductTableRow from "../ProductTableRow";

const ProductTableBody = () => {
    return (
        <div className="product__table-body px-3 mb-8">
            <ProductTableRow />
            <ProductTableRow />
            <ProductTableRow />
            <ProductTableRow />
        </div>
    )
}

export default ProductTableBody;