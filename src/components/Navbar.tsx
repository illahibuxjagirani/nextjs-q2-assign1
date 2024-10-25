import Link from "next/link"

export default function Navbar(){

  const myList = [
    {name: "Home", href: "/"},
    {name:"About Us", href: "/about"},
    {name:"Contact Us", href: "/contact"},
    {name:"Product", href: "/product"},
    {name:"Services", href: "/services"},
    {name:"Blogs", href: "/blog"},

  ]
  return(
  <div className={`flex items-center justify-between bg-gradient-to-t from-green-200 to bg-red-300 p-3 rounded-sm sticky top-0 z-20 h-[70px] px-6`}
  >
    {/* left div */}
    <div>
    <p className="text-xl italic text-blue-600 text-bold">ILLAHIBUX</p>
    </div>

    {/* right div */}
    <div className="flex gap-1 sm:gap-4 md:text-xl">
    {
      myList.map( (e, index) => 
      (<Link href={e.href} key={index} className="bg-blue-600 text-white p-2 hover:bg-blue-700 rounded-md shadow-sm"> {e.name}</Link>)
      )
    }
    </div>
  </div>
)
}