import "./Hero.css";
import Home from "../../assets/Imgs/Home-phone.png";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import Sec from "../Section-2/Sec";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products",
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    let start1 = 0;
    let end1 = 200;
    let start2 = 0;
    let end2 = 3000;
    let start3 = 0;
    let end3 = 40000;

    const interval1 = setInterval(() => {
      start1 += 10;
      if (start1 >= end1) clearInterval(interval1);
      setCount1(start1);
    }, 10);

    const interval2 = setInterval(() => {
      start2 += 100;
      if (start2 >= end2) clearInterval(interval2);
      setCount2(start2);
    }, 50);

    const interval3 = setInterval(() => {
      start3 += 1000;
      if (start3 >= end3) clearInterval(interval3);
      setCount3(start3);
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Nav setSearchTerm={setSearchTerm} />
      <div className="hero">
        <div className="hero-text-container">
          <h1 className="hero-heading">
            FIND CLOTHES <br /> THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="hero-text">
            Browse through our diverse range of meticulously crafted garments,
            designed <br /> to bring out your individuality and cater to your
            sense of style.
          </p>
          <div className="hero-counts">
            <div className="hero-count">
              <h2>{count1}+</h2>
              <p>Stores</p>
            </div>
            <div className="hero-count">
              <h2>{count2}+</h2>
              <p>Products</p>
            </div>
            <div className="hero-count">
              <h2>{count3}+</h2>
              <p>Customers</p>
            </div>
          </div>
        </div>
        <img src={Home} alt="Hero Image" className="hero-img" />
      </div>

      <h1 className="products-title">Our Products</h1>

      <section className="sec-2">
        <div className="carts-container">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            currentItems.map((item) => (
              <Link to={`/single/${item.id}`} className="cart" key={item.id}>
                <img src={item.images[0]} alt={item.title} />
                <div className="cart-text">
                  <h3>{item.title}</h3>
                  <p>{item.price}$</p>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </section>

      <Sec />
      <Footer />
    </div>
  );
}
