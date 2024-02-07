import Image from "next/image"
import ProductImageCard from "./ProductImageCard";
import SelectButtonProductCard from "./SelectButtonProductCard";

interface ProductCardType {
    title: string,
    your_cost: number,
    msrp: number,
}

const ProductCard = (props: ProductCardType) => {
    const { title, your_cost, msrp } = props;
    return (
        <div className="flex gap-6 bg-[#ffffff] p-6  rounded-xl ">

            <div className="flex flex-col gap-6 w-2/6">
                <div>
                    <Image src="/product-img.png" alt="product-image" width={260} height={260} />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <ProductImageCard src="/product-img3.png" />
                    <ProductImageCard src="/product-img2.png" />
                    <ProductImageCard src="/product-img2.png" />
                    <ProductImageCard src="/product-img2.png" />
                    <ProductImageCard src="/product-img3.png" />
                </div>
            </div>

            <div className="w-full flex flex-col gap-8">
                <div className="mt-2 text-2xl  font-semibold leading-7 font-hkgroteks">
                    {title}
                </div>

                <div className="flex flex-col gap-6 w-5/12 ">
                    <div className="flex gap-6 justify-between">
                        <div className="flex w-3/5 gap-1 flex-col ">
                            <div className="text-base text-[#080C10B8] font-medium leading-5 font-switzer">  Your Cost </div>
                            <div className="text-3xl font-semibold text-[#080C10] leading-10 font-hkgroteks">  ${your_cost} </div>
                        </div>
                        <div className="flex w-2/5 flex-col gap-1">
                            <div className="text-base text-[#080C10B8] font-medium leading-5 font-switzer">   MSRP </div>
                            <div className="text-[#667385] text-2xl font-switzer leading-8 font-normal" >   ${msrp}  </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div >
                            <button type="button" className="w-52 text-white flex items-center gap-2 bg-[#076AFF] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 ">
                                <span>  Import To Inventory</span>
                                <span> <Image src="/import-icon.svg" alt="import-icon" width={24} height={24} />        </span>
                            </button>
                        </div>
                        <div>
                            <button type="button" className="w-52 flex items-center gap-2 py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                                <span>  View on </span>
                                <span> <Image src="/aliExpress-logo.svg" alt="company-icon" width={104} height={24} /></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    <SelectButtonProductCard title="Color:" />
                    <SelectButtonProductCard title="Size:" />
                    <SelectButtonProductCard title="Style:" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard