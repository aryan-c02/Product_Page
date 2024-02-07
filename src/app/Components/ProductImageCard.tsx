import Image from "next/image"

interface ProductImageCardType {
    src: string,
}

const ProductImageCard = (props: ProductImageCardType) => {
    const { src } = props;
    return (
        <div className="border-[#E3E6EC]   rounded-lg">
            <Image src={src} alt="product-img" width={56} height={56} />
        </div>
    )

}

export default ProductImageCard 