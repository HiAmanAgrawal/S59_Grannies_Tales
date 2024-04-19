import React, { useEffect } from "react";
import UpdateButton from "./UpdateCard";
import DeleteButton from "./DeleteButton";


function Cards({item}) {

  useEffect(() => {
    console.log(item)
  }
  , [item]);

  

  return (
    <>
     <div className="mt-4 my-3 p-3">
        <div className="card w-92 h-[70vh] bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
           <div className="h-[50vh]"><img src={item && item.Image} /></div> 
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {item && item.storyName}
              <div className="badge badge-secondary  h-[5vh]">{item && item.category}</div>
            </h2>
            <p>{item && item.Author}</p>
            <div className="card-actions justify-between">

              <div>{item && item.Language}</div>
              <UpdateButton entityId={item._id}/>
              <DeleteButton entityId={item._id}/>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
