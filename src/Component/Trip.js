import Card from "./Card";
// we can access entire trip variable data once by this syntex {varible name} inside function
function Trip({ trip,removeTour }) {
  // get all the trip data from Data.js
  return (
    <div className='Wrapper'>
      <div>
        <h2 className='title'>Plan with Jagmohan Rai</h2>
      </div>

      <div  className='cards'>
        {/* <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart> */}
        {/* rather than typing 7 time card we can do by map function only single line or single time s */}

        {trip.map((tour) => {
          /* {...tour} we copy entire tour data into cart component  */
          {/* when u use map function that time you must pass key by default u can pass index as a key */}
          {/* but our case we have id which is unique  */}
          {/* we are passing tour.id as a key bcs id has unique value  */}
          return <Card  key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}
export default Trip;
