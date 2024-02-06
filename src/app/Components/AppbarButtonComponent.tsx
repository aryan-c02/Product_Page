
import Image from "next/image"

interface AppbarButtonComponentType {
    title: string,
    src: string,
}

const AppbarButtonComponent = (props: AppbarButtonComponentType) => {
    const { title, src } = props
    return (
        <div>
            <button type="button" className="w-52 h-12 flex items-center pl-4 gap-5 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-[#199DFD14]  hover:text-blue-600 focus:z-10  ">
                <span>
                    <Image className="" src={src} alt="company-icon" width={20} height={20} />
                </span>
                <span className="text-[#667385] hover:text-blue-600 capitalize text-base font-normal">
                    {title}
                </span>
            </button>
        </div>
    )
}

export default AppbarButtonComponent