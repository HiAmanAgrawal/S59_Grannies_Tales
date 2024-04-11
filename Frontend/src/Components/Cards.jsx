import React, { useEffect } from "react";

function Cards({item}) {
  useEffect(() => {
    console.log(item)
  }
  , [item]);

  return (
    <>
     <div className="mt-4 my-3 p-3">
        <div className="card w-92 h-[70vh] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
           <div className="h-[50vh]"><img src={item && item.Image} /></div> 
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item && item.storyName}
              <div className="badge badge-secondary  h-[5vh]">{item && item.category}</div>
            </h2>
            <p>{item && item.Author}</p>
            <div className="card-actions justify-between">
              <div>{item && item.Language}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Read Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
