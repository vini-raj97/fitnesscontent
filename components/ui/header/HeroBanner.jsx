import Link from "next/link"


function HeroBanner ( {title, tagline , thislink , linkname , bclass}){
    return (
        <header className=" text-blue-100 p-3  ">
               
            <h1 className="text-5xl leading-tight pb-2 font-bold ">{title || "Page Title"}</h1>
            <Link className={bclass} href={thislink || ""}>{linkname}</Link>
                
        </header>

 
    )
 }
 export {HeroBanner}