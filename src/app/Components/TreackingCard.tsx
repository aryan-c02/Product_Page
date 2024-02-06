
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
                <button type="button" class="h-6 w-10/12 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 uppercase ">Tracking Available</button>
            </div>

            <div className="flex justify-between w-10/12">
                <div className="font-medium text-base text-[#080C10]">
                    EPACKET
                </div>
                <div className="font-medium text-xl text-[#080C10]">
                    ${epacket}
                </div>
            </div>

            <div className="w-10/12 flex gap-5 items-center ">

                <div>
                    <Image src="/shipping-icon.svg" alt="arrow-icon" width={20} height={20} />
                </div>
                <div className="font-normal text-base text-[#667385] ">
                    {lower_days} - {higher_days} Days
                </div>

                <div >
                    <div>
                        <Image src="/location-icon.png" alt="arrow-icon" width={16} height={16} />
                    </div>
                    <div className="font-normal text-base text-[#667385] ">
                        {country}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default TrackingCard