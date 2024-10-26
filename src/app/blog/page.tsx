

export default function BlogPage(){
  return (
    <div className='relative z-10 px-4'>

    
    <div
    className={`inset-0 absolute bg-[url('/img2.jpg')] bg-cover bg-center bg-no-repeat h-[calc(100vh-70px)] opacity-50`}/>

      <div className='relative z-10 flex justify-center items-center flex-col gap-5 h-[calc(100vh-70px)] py-4'>

     
<h1 className='text-6xl font-bold text-red-500'>Blog Page</h1>
<p className='md:w-1/2 md:h-1/2 text-justify text-xl bg-red-100 rounded-lg shadow-green border p-4 shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore error quasi vitae porro explicabo illo unde rem modi animi iure, laboriosam totam, itaque eaque sint officiis ut at nemo hic? Libero, praesentium assumenda. Assumenda vel harum ducimus ut porro eos reprehe.</p> 
</div>

    </div>
  )
}