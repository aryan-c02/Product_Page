
interface ProductDescriptionCardType {
    description: string,
    feature: string[],
    rating: number,
    supplier: string,

}

const ProductDescriptionCard = (props: ProductDescriptionCardType) => {
    const { description, rating, supplier } = props;
    return (
        <div className="flex bg-[#ffffff] h-[400px] p-6 justify-start mt-6 gap-14">
            <div className="w-1/4">
                div1
            </div>
            <div className="">
                div1
            </div>
            <div className="">
                div1
            </div>
        </div>
    )

}

export default ProductDescriptionCard