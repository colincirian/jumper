import React, {useState, useEffect} from "react";

function Jumper() {

  const [data, setData] = useState([{}]);
  
  useEffect(() => {
    fetch("/home").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="game">
      {(typeof data.home === "undefined") ? (
        <p>Loading...</p>
      ) : (
        data.home.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
      
    </div>
  );
}

export default Jumper;
