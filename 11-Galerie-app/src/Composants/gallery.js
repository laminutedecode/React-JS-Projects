import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./gallery.css";

export default function Gallery() {
  // state pour les images
  const [dataImg, setDataImg] = useState([[], [], []]);
  const [dataPage, setDataPage] = useState(1);
  const [dataSearch, setDataSearch] = useState("random");
  const [firstCall, setFirstCall] = useState(true);

  // appel API

  const dataFetch = () => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${dataPage}&per_page=30&query=${dataSearch}&client_id=ktzcJ6KLYsSLtcwyZ9PE_t7rTXX6K7DBRJOx5Whww1E`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const imgsResponse = [];
        data.results.forEach((img) => {
          imgsResponse.push(img.urls.regular);
        });
        const newStates = [[...dataImg[0]], [...dataImg[1]], [...dataImg[2]]];

        let index = 0;
        // double boucles for pour remplir les 3 tableaux vide de dataImg
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 10; j++) {
            newStates[i].push(imgsResponse[index]);
            index++;
          }
        }
        setDataImg(newStates);
        setFirstCall(false);
      });
  };
  console.log(dataImg);

  const searchFetch = () => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${dataPage}&per_page=30&query=${dataSearch}&client_id=ktzcJ6KLYsSLtcwyZ9PE_t7rTXX6K7DBRJOx5Whww1E`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const imgsResponse = [];

        data.results.forEach((img) => {
          imgsResponse.push(img.urls.regular);
        });

        const newStates = [[], [], []];

        let index = 0;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 10; j++) {
            newStates[i].push(imgsResponse[index]);
            index++;
          }
        }

        setDataImg(newStates);
      });
  };

  useEffect(() => {
    if (firstCall) return;
    searchFetch();
  }, [dataSearch]);

  useEffect(() => {
    dataFetch();
  }, [dataPage]);

  const funcForm = (e) => {
    e.preventDefault();
    setDataSearch(inpRef.current.value);
    setDataPage(1);
  };

  const inpRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", infinite);

    return () => {
      window.removeEventListener("scroll", infinite);
    };
  }, []);

  const infinite = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop === clientHeight) {
      setDataPage((dataPage) => dataPage + 1);
    }
  };

  return (
    <div className="container">
      <form onClick={funcForm}>
        <label htmlFor="search">Que rechercher vous ?</label>
        <input type="text" id="search" ref={inpRef} />
      </form>
      <div className="card-grid">
        <div>
          {dataImg[0].map((img) => {
            return <img key={uuidv4()} src={img} alt="Image by unspash" />;
          })}
        </div>
        <div>
          {dataImg[1].map((img) => {
            return <img key={uuidv4()} src={img} alt="Image by unspash" />;
          })}
        </div>
        <div>
          {dataImg[2].map((img) => {
            return <img key={uuidv4()} src={img} alt="Image by unspash" />;
          })}
        </div>
      </div>
    </div>
  );
}
