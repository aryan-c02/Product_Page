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

                        <div className="flex items-center gap-0">
                            <div className="w-5 h-5">
                                <svg className=" text-[#076AFF] m-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <div className="w-5 h-5">
                                <svg className=" text-[#076AFF] m-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <div className="w-5 h-5">
                                <svg className=" text-[#076AFF] m-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <div className="w-5 h-5">
                                <svg className=" text-[#076AFF] m-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <div className="w-5 h-5">
                                <svg className=" text-[#E3E6EC] dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <p className="ml-2 text-base font-switzer font-medium text-[#080C10B8] leading-5">4.7</p>
                        </div>

                        <div className="text-center font-medium text-base font-switzer leading-5 ml-2 text-[#080C10B8] ">
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