import Image from "next/image"


const Brands = () => {
  return (
    <section
        className="max-w-4xl mx-auto mt-16 mb-16"
      >
        <div className={`relative w-full h-44`}>
                  <Image src={"/images/Brands.png"} alt="brands" fill sizes="(max-width: 768px) 50vw, 176px" className="object-contain" />
        </div>
    </section>
  )
}

export default Brands