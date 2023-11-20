import { cn } from "@/lib/utils/mergeCss"
import { MobileMenuIcon } from "../../icons/MobileMenu"


 function MobileMenu ( {children, className}){
    return (       

        <div>
              <MobileMenuIcon className="lg:hidden w=10 h-10 fill-black"/>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                 <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                 Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>  
        </div>
       
    )
 }



 export {MobileMenu}

 