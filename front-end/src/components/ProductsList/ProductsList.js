import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CardComp from "./card";

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
  const [items, setitems] = useState([1, 2, 3, 4]);

  useEffect(() => {
    console.log("useEffProdList");
    //function getData() {
    axios.get("http://localhost:3000/product").then((response) => {
      // console.log(response.data);
      //console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);

      setitems(response.data);
      setTotalPages(parseInt(items.length / 8 + 1));
      console.log(totalPages);
    });
  }, [totalPages, items.length]);

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
        <span
          style={{ display: "justify" }}
          id="itemsList"
          className="itemsList"
        >
          <Grid
            container
            justify="center"
            spacing={4}
            style={{ marginTop: "20px" }}
          >
            {items.map((product) => (
              <CardComp key={product.id} product={product} />
            ))}
          </Grid>
        </span>
      </div>
    </div>
  );
}
