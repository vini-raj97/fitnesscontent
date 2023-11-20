import {ListPlaceHolder} from "@/app/products/components/ListPlaceholder"
import { PlaceHolderCard } from "@/components/cards/PlaceholderCard"
 
 
 
  async function getVideos(){
    const res = await fetch('https://fintnesstrainer-default-rtdb.firebaseio.com/fitnesscontent.json')
    return await res.json()
 }

 
async function Videos() {
 
    const videos = await getVideos();
     
    if(videos){
      const {details} = {  ...contents}
      console.log(videos)
    }
    return (
     <>

<header className="bg-white mt-12">
    
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20  ">
       
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-60deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />


       <div className="flex justify-center items-center gap-20">
       <div className=" w-1/3 ">
        
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-2">
         Videos
        </h1>
       
          <p className="text-lg leading-8 text-gray-600">
            Build muscle with this exclusive fitness training program.
          </p>
         
      
 
    </div>

     <div>
     <ListPlaceHolder/>
     </div>
       </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  </header>
  
      
        <main className=" ">
      
         <PlaceHolderCard/>
        </main>
     </>
    )
  }


  export default Videos