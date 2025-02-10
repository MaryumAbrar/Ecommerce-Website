import Image from "next/image";

const ShopexOffer = () => {
  const offers = [
    {
      image: "/offer/free-delivery.svg",
      title: "Free Shipping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/offer/cashback.svg",
      title: "Money Back Guarantee",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/offer/premium-quality.svg",
      title: "Premium Quality",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/offer/24-7.svg",
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <div className="w-full py-2 flex justify-center items-center">
      <div className="w-[90vw] md:max-w-5xl">
        <h3 className="h3-bold text-center text-[#1A0B5B] mb-16">What Shopex Offer!</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {offers.map((offer: any, index: number) => (
            <div key={index} className="flex flex-col gap-2 items-center p-4 shadow-md rounded-lg">
              <Image src={offer.image} alt={offer.title} height={70} width={70} />
              <h5 className="text-[1.2em] text-center text-[#1A0B5B]">{offer.title}</h5>
              <p className="text-[#1A0B5B] text-center">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopexOffer;
