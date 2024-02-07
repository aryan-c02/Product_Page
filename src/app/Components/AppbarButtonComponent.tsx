
import Image from "next/image"

interface AppbarButtonComponentType {
    title: string,
    src: string,
}

const AppbarButtonComponent = (props: AppbarButtonComponentType) => {
    const { title, src } = props
    return (
        <div>
            <button type="button" className="w-52 h-12 flex items-center pl-4 gap-5 text-gray-900  bg-white rounded-lg  hover:bg-[#199DFD14]  hover:fill-[#076AFF] hover:text-[#076AFF] focus:z-10  ">
                <span>
                    <Image className="" src={src} alt="company-icon" width={20} height={20} />
                </span>
                <span className="text-[#667385] font-switzer leading-5 hover:text-[#076AFF] capitalize text-base font-medium">
                    {title}
                </span>
            </button>
        </div>
    )
}

export default AppbarButtonComponent