 import {cn} from '@/lib/utils/mergeCss' 
 
 function BrandName ( {className, name}){
  
    return (
       <h2 className={cn("text-inherit font-bold", className)}>
        {name || "Company Name"}
       </h2>
 
    )
 }



 export default BrandName  