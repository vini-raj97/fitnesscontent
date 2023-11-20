function PlaceHolderCard({title, description}) {
    return (
        <aside className="w-5/6 sm:max-w-[280px] min-h-[320px] shadow pt-8 px-5 pb-10   text-gray-500">
            <h2 className="pb-2 font-medium text-sm">{title || "title"}</h2>
           
             <div>
             <svg className=" w-full  border    stroke-lime-900/10"  >
               <defs>
                 <pattern id="pattern-b4126363-2260-432a-9ef3-4e9b56aecbec" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                   <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                 </pattern>
               </defs>
               <rect stroke="none" fill="url(#pattern-b4126363-2260-432a-9ef3-4e9b56aecbec)" width="100%" height="100%"></rect>
             </svg>
             <p className="text-sm pt-8   pb-6">
              {description}
             </p>
             </div>

             <footer className="flex justify-center gap-x-6 text-sm">
              <button className="">add to cart</button>
               <button className="">buy now</button>
             </footer>
          
        </aside>
    )
  }

  export {PlaceHolderCard}
  