import Image from "next/image";

export default function LocationMap() {
  return (
    <div className="w-full bg-[#c8e8f5] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/images/map.png"
          alt="Map showing route from Brisbane Australia to Solomon Islands via Honiara and Gizo"
          width={900}
          height={520}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
