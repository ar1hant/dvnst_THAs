import { useEffect, useState } from "react";
import "./covid.css";

const ApiCovid = () => {
  const [po, setPo] = useState(null);

  useEffect(() => {
    const fetch_api = async () => {
      const response = await fetch(
        "https://covid2019-api.herokuapp.com/v2/country/india"
      );
      const posts = await response.json(); // const posts_text = response.text();
      setPo(posts);
    };
    //fetch api
    fetch_api();
  }, []);
  console.log(po);
  return (
    <div>
      <h1>
        Date:
        {po && <div>{po.dt}</div>}<br/>
      </h1>
      <h1 className="Data">
        Location:
        {po && <p>{po.data.location}</p>}<br/>
        Confimed:
        {po && <p>{po.data.confirmed}</p>}<br/>
        Deaths:
        {po && <p>{po.data.deaths}</p>}<br/>
        Recovered:
        {po && <p>{po.data.recovered}</p>}<br/>
        Active:
        {po && <p>{po.data.active}</p>}
      </h1>
    </div>
  );
};

export default ApiCovid;