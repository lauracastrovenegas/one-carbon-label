/*import React from 'react';
import SearchBar from '../../components/SearchBar/searchBar';
 
const LandingPage = () => (
  <div>
    <h1>One Carbon Label</h1>
    <SearchBar 
       input={input} 
       onChange={updateInput}
      />
  </div>
);
 
export default LandingPage;*/
import firebase from '../../components/Firebase/firebase';
import 'firebase/firestore';
import React, { useState, useEffect } from 'react';

function LandingPage () {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("tests");

  function getReviews(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setReviews(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getReviews();
  },[]);
	
  return (
    <>
      <h1>Reviews List</h1>
      {reviews.map((review) =>(
        <div key = {review.id}>
          <h2>{review.title}</h2>
          <p>{review.desc}</p>
        </div>
      ))}
    </>
   );
}

export default LandingPage;