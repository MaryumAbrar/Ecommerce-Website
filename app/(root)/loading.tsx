import Image from "next/image";

export default function Loading() {
    return <div className="max-w-6xl mx-auto h-[70vh] flex justify-center items-center">
    
      <Image src={"/images/loading.gif"} alt="loading" width={200} height={200} />
    
    </div>
  }
