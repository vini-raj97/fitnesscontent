import Link from "next/link"


function PageHeader ( {title, tagline , thislink , linkname}){
    return (
        <header className=" text-blue-100 p-3  ">
               
            <h1 className="text-5xl pb-2 font-bold ">{title || "Page Title"}</h1>
            <p>{tagline || "Page Tagline"}</p>
                
        </header>

 
    )
 }



 export {PageHeader}