import Image from "next/image"

interface SelectButtonProductCard {
    title: string,

}

const SelectButtonProductCard = (props: SelectButtonProductCard) => {
    const { title } = props;
    return (
        <div className="w-40 flex flex-col gap-2">
            <div className="text-[#667385] font-switzer leading-5 font-normal text-base">
                {title}
            </div>
            <div>
                <button type="button" className="w-44 flex justify-between items-center gap-2 py-2.5 px-2.5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#E3E6EC] hover:bg-gray-100 hover:text-blue-700 ">
                    <span className="text-[#667385] font-switzer text-base leading-5 font-normal"> SelectColor  </span>
                    <span ><Image src={"/arrow-down-icon.svg"} alt="arrow-icon" width={20} height={20} /> </span>
                </button>
            </div>
        </div>
    )
}

export default SelectButtonProductCard