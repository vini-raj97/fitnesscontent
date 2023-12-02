 import { cn } from "@/lib/utils/mergeCss"

 function Button ( {children, className, onClick}){
  
    return (
       <button onClick={onClick} className={cn('w-full text-inherit bg-inherit text-sm  py-0.5 px-8 rounded-md', className)}>
           {children}
       </button>
 
    )
 }



 export { Button }