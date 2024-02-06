
interface ProductCardType {
    title: string,
    your_cost: number,
    msrp: number,

}

const ProductCard = (props: ProductCardType) => {
    const { title, your_cost, msrp } = props;
    return (
        <div className="flex gap-6 h-[450px] bg-[#ffffff] p-6 mt-6 ">
            <div className="w-64">
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className="w-full flex flex-col gap-8">
                <div className="h-12 mt-2">
                    {title}
                </div>
                <div className="flex flex-col justify-between w-5/12 h-[136px]">
                    <div>
                        hi1
                    </div>
                    <div>
                        hi2
                    </div>
                </div>
                <div className="h-16 w-7/12 ">

                </div>

            </div>

        </div>
    )
}

export default ProductCard