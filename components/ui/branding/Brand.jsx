import Link from "next/link"

import { cn } from "@/lib/utils/mergeCss"
 


function Brand ( {brandName, brandLogo, className,  ...props}){
    return (
      <Link href="/">
          <figure className={cn("flex gap-x-1 text-indigo-500", className)}>
            {brandLogo}
            <figcaption>
              {brandName}
            </figcaption>
          </figure>
      </Link>
    )
 }



 export default Brand


 
 
 
 
