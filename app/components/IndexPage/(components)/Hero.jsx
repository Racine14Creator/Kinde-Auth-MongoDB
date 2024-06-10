import Image from "next/image";

export default function Hero() {
  return (
    <div className='w-full sm:w-full flex justify-between gap-5 items-center'>
      <h4 className='text-4xl font-bold'>Auth with Kinde and MongoDB</h4>
      <Image
        src={"/next.svg"}
        alt='Hero img'
        width={320}
        height={300}
        className='rounded-md flex justify-center items-center object-cover'
      />
    </div>
  );
}
