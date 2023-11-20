import { cn } from "@/lib/utils/mergeCss"

 
 function LinkList ( {children, className}){
    return (
       <ul className={cn('flex justify-center', className)}
       >
        {children}
       </ul>
    )
 }



 export {LinkList}


 
  
  
  
 