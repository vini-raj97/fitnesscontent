const items = [
    { id: "python data analyst" },
    { id: "ui/ux developer" },
    { id: "ruby on rails developer" },
    { id: "react front end dev" },
  
 
  ]
  
function ListPlaceHolder() {
    return (
      <ul role="list" className="">
        {items.map((item) => (
         <li key={item.id} className="py-4 w-[300px] ">
               
           <div className="relative h-16 overflow-hidden rounded border border-dashed border-gray-400 opacity-75">
             <svg className="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
               <defs>
                 <pattern id="pattern-b4126363-2260-432a-9ef3-4e9b56aecbec" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                   <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                 </pattern>
               </defs>
               <rect stroke="none" fill="url(#pattern-b4126363-2260-432a-9ef3-4e9b56aecbec)" width="100%" height="100%"></rect>
             </svg>
               <div className="text-center py-4">
               <span>{item.id}</span>
               </div>
           </div>
      
       </li>
        ))}
      </ul>
    )
  }
  
  export {ListPlaceHolder}