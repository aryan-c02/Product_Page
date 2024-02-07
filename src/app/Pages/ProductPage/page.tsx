
import Image from "next/image"
import Appbar from "@/app/Components/Appbar"
import ProductCard from "@/app/Components/ProductCard"
import ProductDescriptionCard from "@/app/Components/ProductDescriptionCard"
import { ProductDescriptionDetails, ProductCardDetails } from "@/app/data/data"

const ProductPage = () => {
    return (
        <div className="grid grid-cols-10 gap-0 min-h-screen">
            <div className="col-span-2 h-screen ">
                <Appbar />
            </div>
            <div className="col-span-8 bg-[#E3E6EC] pt-6 pb-4  pl-3 pr-4">
                <div>
                    <span className="text-[#ABB3BF] font-switzer font-medium leading-6 uppercase text-lg">Discover Products /</span>
                    <span className="text-[#667385] font-switzer font-medium leading-6 uppercase text-lg">&nbsp; Action Camera Ultra HD1080P...</span>
                </div>
                <div className="w-24 mt-6">
                    <button className="flex rounded-lg items-center pl-2 border shadow   gap-1  bg-[#FAFAFB] w-full h-[40px]">
                        <div className="">
                            <Image src="/arrow-right-icon.svg" alt="arrow-icon" width={24} height={24} />
                        </div>
                        <div className="color-[#080C10B8] text-base font-switzer font-medium leading-5">Back</div>
                    </button>
                </div>
                <div className="mt-6">
                    <ProductCard {...ProductCardDetails} />
                </div>
                <div className="mt-6">
                    <ProductDescriptionCard {...ProductDescriptionDetails} />
                </div>
            </div>
        </div>
    )

}

export default ProductPage







