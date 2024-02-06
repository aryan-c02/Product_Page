import Image from "next/image"
interface ProductDescriptionCardType {
    description: string,
    feature: string[],
    rating: number,
    supplier: string,

}

const ProductDescriptionCard = (props: ProductDescriptionCardType) => {
    const { description, feature, rating, supplier } = props;
    return (
        <div className="flex bg-[#ffffff]  p-6 justify-start  gap-14">
            <div className="w-4/12 ">
                <div className="text-[#667385]">
                    PRODUCT DESCRIPTION
                </div>
                <div className="text-sm leading-5 font-medium font-sans text-[#080C10B8]">
                    {description}
                </div>

                <div className="mt-2 text-sm leading-5 font-medium font-sans text-[#080C10B8]">
                    Feature :
                </div>
                {
                    feature.length > 0 && feature.map((data, index) => {
                        return (
                            <div className="text-sm leading-5 font-medium font-sans text-[#080C10B8]" key={index}>
                                {data}
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-1/5 flex flex-col gap-8">
                <div>
                    <div className="text-[#667385]">
                        RATING
                    </div>
                    <div>

                    </div>
                </div>
                <div className=" flex flex-col gap-4" >
                    <div className="text-[#667385]">
                        SUPPLIER
                    </div>
                    <div className="text-[##080C10B8]">
                        {supplier}
                    </div>

                    <div className="flex items-center justify-center rounded bg-[#FAFAFB] w-32 h-[40px]">
                        <button className=" w-full h-full flex bg-white pl-2 text-[#667385] rounded justify-around items-center border shadow">
                            <div className="text-sm">
                                View Store
                            </div>
                            <div className="w-6 rotate-180">
                                <Image src="/arrow-right-icon.svg" alt="arrow-icon" width={24} height={24} />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
            <div className="w-2/6">
                div1
            </div>
        </div>
    )

}

export default ProductDescriptionCard