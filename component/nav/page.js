import Link from "next/link"
export default function Navbar() {
    return (

        <nav class="bg-white border-gray-200 dark:bg-gray-900 h-[100px] mt-[10px] w-full justify-center flex flex-col items-center">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mr-[100px]">

                <div class="hidden w-full md:block md:w-auto" >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href='/home' class="block py-2 pl-3 pr-4 md:hover:text-gray-500 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:border-solid hover:border-[2px] hover:border-gray-500 dark:text-white md:dark:text-gray-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href='/about' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 hover:border-solid hover:border-[2px] hover:border-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                            <Link href='/services' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 hover:border-solid hover:border-[2px] hover:border-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                        </li>

                        <li>
                            <Link href='contact' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 hover:border-solid hover:border-[2px] hover:border-gray-500 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}