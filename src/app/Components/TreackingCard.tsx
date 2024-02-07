
import Image from "next/image"

interface TrackingCardType {
    tracking_available: boolean,
    epacket: number,
    lower_days: number,
    higher_days: number,
    country: string,

}
const TrackingCard = (props: TrackingCardType) => {
    const { tracking_available, epacket, lower_days, higher_days, country } = props

    return (
        <div className="py-6 flex flex-col items-center justify-between gap-5 w-full mt-4 rounded-xl h-40 border border-[#E3E6EC]">
            <div className="w-10/12 flex justify-start">
                <button type="button" className="h-6 w-56 font-switzer font-semibold text-sm leading-4 tracking-wider text-[#FFFFFF] bg-[#076AFF] hover:bg-[#076AFF]   rounded-xl  uppercase ">Tracking Available</button>
            </div>

            <div className="flex justify-between w-[300px] ">
                <div className="font-semibold flex items-center text-base leading-5 text-[#080C10]">
                    EPACKET
                </div>
                <div className="font-semibold font-hkgroteks leading-6 text-xl text-[#080C10]">
                    ${epacket}
                </div>
            </div>

            <div className="w-10/12 flex gap-5 items-center ">
                <div className="flex ">
                    <div>
                        <Image src="/shipping-icon.svg" alt="arrow-icon" width={20} height={20} />
                    </div>
                    <div className="font-normal text-base leading-5 font-switzer text-[#667385] mt-0.5 ml-2">
                        {lower_days} - {higher_days} Days
                    </div>
                </div>

                <div className="flex items-center gap-3" >
                    <div>
                        <Image src="/location-icon.png" alt="arrow-icon" width={16} height={16} />
                    </div>
                    <div className="font-normal font-switzer  leading-5 text-base text-[#667385] mt-0.5">
                        {country}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TrackingCard