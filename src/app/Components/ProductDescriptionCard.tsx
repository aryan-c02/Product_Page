import Image from "next/image"
import TrackingCard from "./TreackingCard";
import { TrackingCardDetails } from "../data/data";
interface ProductDescriptionCardType {
    description: string,
    feature: string[],
    rating: number,
    supplier: string,
    reviews: number,

}

const ProductDescriptionCard = (props: ProductDescriptionCardType) => {
    const { description, feature, rating, supplier, reviews } = props;
    return (
        <div className="flex bg-[#ffffff]  p-6 justify-start  gap-14 rounded-xl">
            <div className="w-4/12 ">
                <div className="text-[#667385] text-base font-semibold leading-5 ">
                    PRODUCT DESCRIPTION
                </div>
                <div className="text-sm leading-5 font-switzer  font-sans text-[#080C10B8]">
                    {description}
                </div>

                <div className="mt-4 text-sm leading-5 font-switzer  font-sans text-[#080C10B8]">
                    Feature :
                </div>
                {
                    feature.length > 0 && feature.map((data, index) => {
                        return (
                            <div className="text-sm leading-5 font-switzer  font-sans text-[#080C10B8]" key={index}>
                                {data}
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-1/4 flex flex-col gap-8">
                <div>
                    <div className="text-[#667385] text-base leading-5 font-switzer font-medium">
                        RATING
                    </div>
                    <div className="flex mt-4">
                        <div>

                        </div>

                        <div className="font-medium text-base text-[#080C10B8] ">
                            {reviews} Reviews
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-4" >
                    <div className="text-[#667385] text-base leading-5 font-switzer font-medium">
                        SUPPLIER
                    </div>
                    <div className="text-[##080C10B8]  font-switzer font-bold leading-5 text-base">
                        {supplier}
                    </div>

                    <div className="flex items-center justify-center rounded bg-[#FAFAFB] w-32 h-[40px]">
                        <button className=" w-full h-full flex bg-white pl-2 rounded-md justify-around items-center border border-[#E3E6EC] ">
                            <div className="text-base leading-5 font-switzer font-medium  text-[#667385]">
                                View Store
                            </div>
                            <div className="w-6 rotate-180">
                                <Image src="/arrow-right-icon.svg" alt="arrow-icon" width={24} height={24} />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
            <div className="w-[400px]">
                <div className="flex gap-2">
                    <div className="">
                        <Image src="/shipping-icon.svg" alt="arrow-icon" width={24} height={24} />
                    </div>
                    <div className="uppercase font-switzer leading-5 text-base font-medium text-[#667385] mt-[2px]">
                        Shipping Options
                    </div>
                </div>
                <div className="">
                    <TrackingCard {...TrackingCardDetails} />
                </div>
            </div>
        </div>
    )

}

export default ProductDescriptionCard