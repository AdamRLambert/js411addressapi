import React, { useEffect, useState } from "react";
//rendered by addressbook
export default function Details(props) {
  const [moreInfo, setMoreInfo] = useState(false);

  const MoreInfoButton = () => {
    return (
      <div>
        {console.log("props.person", props.person)}
        <p>Date of Birth: {props.person.dob.date}</p>
      </div>
    );
  };

  return (
    <div>
      {moreInfo && <MoreInfoButton />}
      <button onClick={() => setMoreInfo(!moreInfo)}>
        {moreInfo ? "Display Less Info" : "Display More Info"}
      </button>
    </div>
  );
}
