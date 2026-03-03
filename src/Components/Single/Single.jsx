import { useParams } from "react-router-dom";
import "./Single.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";

export default function Single() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="item-container">
        <img src={data.images} alt={data.title} />
        <div className="item-details">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
        </div>
      </div>
    </div>
  );
}
