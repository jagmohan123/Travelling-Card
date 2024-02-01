import { useState } from "react";
// card name ke component me trip name ke component se
// {id,name,info,image,prize} aa rhi hai
// by this syntex u can get all of these variable

// 1st way
function Card({ id, name, image, info, price, removeTour }) {
  // description me ek readmore ka button hai jis se pura discription show hota hai
  // jab discription pura show hota hai to vha ek show less ka icon bhi aata hai
  // we have to verify at a time one button show one time
  // when readmore button show that tine showless button hide and when showless the readmore button hide
  // for this logic we have to create variable which value reflect on UI
  // for reflect on UI we use useState() function
  const [readmore, setReadMore] = useState(false);

  // discription ya paragraph me 500 word hai but vha par 200 word hee show ho rhi hai get the 200 line to display
  // const description = `${info.substring(0, 200)}...`;
  // if readmore true so display entire info other wise only show 200 words
  const discription = readmore ? info : `${info.substring(0, 200)}...`;

  //   below function set true or false
  function readmoreHandle() {
    // value true hai to false set kar dega click par and false hai to true
    setReadMore(!readmore);
  }

  //   when we click on not intrusted button it remove the card where we click on not intrusted button

  return (
    <div className="card">
      <img src={image} className="image" alt="loading"></img>
      <div className="trip-details">
        <h4 className="trip-prize">₹ {price}</h4>
        <h4 className="trip-name">{name}</h4>
      </div>
      <div className="trip-description">
        {discription}
        {/* set the readmore button logic at a time one button show */}
        {/* for making readmore clickble we have to use add Listener */}
        <span onClick={readmoreHandle} className="  read-more ">
          {readmore ? `Show Less` : `Read More`}
        </span>
      </div>
      <button className="btn-remove" onClick={() => removeTour(id)}>
        Not Intrusted
      </button>
    </div>
  );
}

//2nd way  we can do by props by below syntex
// function Card(props) {
//   return (
//     <div className="card">
//       <img src={props.image} className="image"></img>
//       <div className="trip-details">
//         <h4 className="tour-prize">{props.price}</h4>
//       </div>
//     </div>
//   );
// }

export default Card;
