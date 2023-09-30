import { useRouter } from 'next/router';

export default function New(){


    const router = useRouter();
  const { abc } = router.query;
    return(
        <div className='flex justify-center items-center'>
           <div className='flex flex-col justify-center items-center'>
            <p className='text-[40px] text-gray-500 font-bold'>
            {abc}
            </p>
            <p className='text-[40px] text-black'>
              OOOPs!!!  I think you are at a wrong page
            </p>
           </div>
        </div>
    )
}