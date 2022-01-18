import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CardComp from "./card";
import { Button } from "react-bootstrap";
export default function ProductsList() {
  const products = [
    {
      id: 1,
      price: "300",
      name: "Tops",
      category: "dsfj sid jfi jiv kifj ifj jrfi ",
      " image": "",
      specification: "",
    },
    {
      id: 2,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hdfvn",
      " image": "",
      specification: "",
    },
    {
      id: 3,
      price: "300",
      name: "neck",
      category: "dsfjsi ifhweiv dfvn",
      " image": "",
      specification: "",
    },
    {
      id: 4,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik wfheruifh weivd fvn",
      " image": "",
      specification: "",
    },
    {
      id: 5,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hkhwk  ther",
      " image": "",
      specification: "",
    },
    {
      id: 6,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hhdkhwk theruif ",
      " image": "",
      specification: "",
    },
    {
      id: 7,
      price: "300",
      name: "neck",
      category: "dsfjsid jfiji vdf jghdfjkg hh ",
      " image": "",
      specification: "",
    },
    {
      id: 8,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik hwkth eruifhew uifh",
      " image": "",
      specification: "",
    },
    {
      id: 9,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hdfjkg hhdkhwk  ",
      " image": "",
      specification: "",
    },
  ];
  const [totalPages, setTotalPages] = useState(1);
  const [CurrPage, setCurrPage] = useState(1);
  const [items, setitems] = useState([1, 2, 3, 4]);
  const [data, setdate] = useState([1, 2, 3, 4]);
  useEffect(() => {
    console.log("useEffProdList");
    //function getData() {
    axios.get("http://localhost:3000/product").then(async (response) => {
      // console.log(response.data);
      //console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);

      setitems(response.data);
      setTotalPages(parseInt(items.length / 8 + 1));

      console.log(totalPages);
    });
  }, []);

  return (
    <div>
      <h1
        style={{
          fontFamily:
            "Proxima Nova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
          width: "100%",
          textAlign: "center",
        }}
      >
        Products
      </h1>
      <div id="Body" className="body" style={{ marginLeft: "40px" }}>
        {/* <span
          style={{ display: "justify" }}
          id="itemsList"
          className="itemsList"
        > */}
        {/* <Grid
            container
            style={{ display: "flex" }}
            justify="center"
            spacing={4}
            style={{ marginTop: "20px" }}
          > */}
        <Pagination
          style={{ display: "flex" }}
          data={items}
          // RenderComponent={Post}
          //title="Posts"
          pageLimit={totalPages}
          dataLimit={8}
        />
        {/* </Grid> */}
        {/* </span> */}
      </div>
    </div>
  );
}

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    console.log(currentPage);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <span style={{ display: "justify" }} id="itemsList" className="itemsList">
        <Grid
          container
          style={{ display: "flex" }}
          justify="center"
          spacing={4}
          style={{ marginTop: "20px" }}
        >
          {getPaginatedData().map((product) => (
            <CardComp key={product.id} product={product} />
          ))}
        </Grid>
      </span>
      <div className="pagination">
        {/* previous Button */}
        <Button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </Button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <Button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </Button>
        ))}

        {/* next Button */}
        <Button
          onClick={goToNextPage}
          // className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </Button>
      </div>
    </div>
  );
}
