import React from 'react'

export default function HistoryCard({Number,
  name,
    cartCash,
    negetivePrice}) {
  return (
    <div>
        <div className="bg-black flex gap-7  mt-5  w-full p-5 my-0 mx-auto rounded-lg text-white hover:shadow-2xl hover:text-black hover:bg-white">
    

<div className="pt-1">
                <p class="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">{Number}</p>
              </div>


              <div className="mt-1 font-bold">
                    <p className="font-light text-base">price</p>
                    <p className="font-bold tracking-more-wider mt-1 text-sm"> {negetivePrice}</p>
                  </div>

                  <div className="mt-1">
                   <p className="font-light">Name</p>
                   <p className="font-medium tracking-widest">{name}</p>
                 </div>


                

                 
      
    </div>
    </div>
  )
}
