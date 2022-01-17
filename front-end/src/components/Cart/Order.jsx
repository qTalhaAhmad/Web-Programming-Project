import React, { useState, useEffect } from 'react';
import axios from 'axios'
import OrderCard from './OrderCard'
import { Button, Card } from 'react-bootstrap';
export default function Cart() {
    const products = [
    {
      id: 1,
      price: "300",
      name: "Tops",
      category: "dsfj sid jfi jiv kifj ifj jrfi ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 2,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hdfvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 3,
      price: "300",
      name: "neck",
      category: "dsfjsi ifhweiv dfvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 4,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik wfheruifh weivd fvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 5,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hkhwk  ther",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 6,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hhdkhwk theruif ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 7,
      price: "300",
      name: "neck",
      category: "dsfjsid jfiji vdf jghdfjkg hh ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 8,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik hwkth eruifhew uifh",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 9,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hdfjkg hhdkhwk  ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
  ];


  const [items, setitems] = useState([1,2,3,4])

  useEffect(() => {
    console.log('useEffCurrentOrderPageUser')
    
    axios.get('http://localhost:3000/user//currOrder')
        
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);      
        setitems(response.data);

      });
  }, []);

  return (
        <Card style=
        {{maxWidth:600 ,
        margin:"auto",
        marginBottom:"20px"}} >
            <Card.Header>
                <Card.Title 
                as="h4" 
                className='pt-2'>
                Your Order
                </Card.Title>
              </Card.Header>
           {items.map((product)=>(<OrderCard product={product}/>))}

           <Button style={
               { marginLeft:"10px",
               marginTop:"5px",
               marginBottom:"10px" ,
               width:"25%" ,
               paddingLeft:"10px"}
            } 
            className="ml-4"
            varinet="success">
            Cancel Order
            </Button>
        </Card>
    )
}
