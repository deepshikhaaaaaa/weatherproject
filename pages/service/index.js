import Link from "next/link"
export default function Home() {
    return (

        <div className="sm:flex w-full">
            <div className="sm:w-[30%]  bg-gray-800 h-[800px]">
                <p className="text-white font-[10px] text-[35px] ml-[50px]">LOGO</p>
                <div className="text-gray-200 font-[8px] text-[20px] mt-[200px] flex flex-col gap-y-[20px] w-full justify-center items-center ">
                    <Link href='/home' className="bg-[#2f3343] h-[50px] flex items-center  border-solid rounded-[14px] relative pl-[10px] w-[90%]">
                        Home
                    </Link>
                    <Link href='/service' className="bg-[#2f3343] h-[50px] flex items-center   border-solid rounded-[14px] pl-[10px] w-[90%]">
                        Service
                    </Link>
                    <Link  href='/about' className="bg-[#2f3343] h-[50px] flex items-center   border-solid rounded-[14px] pl-[10px] w-[90%]">
                        About
                    </Link>
                    <Link  href='/contact' className="bg-[#2f3343] h-[50px] flex items-center   border-solid rounded-[14px] pl-[10px] w-[90%]">
                        Contact
                    </Link>
                    <Link  href='/' className="bg-[#2f3343] h-[50px] flex items-center   border-solid rounded-[14px] pl-[10px] w-[90%]">
                        weather
                    </Link>
                </div>
            </div>

            <div className="sm:w-[70%] bg-gray-400 h-[800px] flex items-center justify-center">
<p className="text-[60px]  font-semibold text-black">SERVICE</p>
            </div>
        </div>
    )
}