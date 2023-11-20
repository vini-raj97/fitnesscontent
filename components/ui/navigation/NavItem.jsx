
import { cn } from "@/lib/utils/mergeCss"

 

 function Link ( {label, routePath, className, icon}){
    return (
        <Link className={cn('', className)} href={routePath || "/"}>
            {icon || null}
            {label || "route path "}
        </Link>
    )
 }



 export {Link}