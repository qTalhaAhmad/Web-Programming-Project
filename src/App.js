
import  NavComp  from './components/navbar';
import CardComp from './components/card';





function App() {
  const infos = [
    {
      id: 1,
      price: "300",
      name: "Tops",
      disp: "dsfjsidjfijivkhwktheruifhewuifhwfheruifhweivdfvn",
    },
    {
      id: 2,
      price: "300",
      name: "Jewl",
      disp: "dsfjsivdfjghdfjkg hhdkhwktheruifhewuifhwfheruifhweivdfvn",
    },
    {
      id: 3,
      price: "300",
      name: "neck",
      disp: "dsfjsidjfijivdfjghdfjkg hhdkhwktheruiruifhweivdfvn",
    },
    {
      id: 4,
      price: "300",
      name: "shoes",
      disp: "dsfjsidjfikhwktheruifhewuifhwfheruifhweivdfvn",
    },
    {
      id: 5,
      price: "300",
      name: "caps",
      disp: "dsfjsidjdfjghdfjkg hhdkhwktheruifhewuifhwfheruifhweivdfvn",
    },
  ];
  return (
    <div className="App">
      <NavComp />
<<<<<<< HEAD
      <div id="Body" className="body" style={{ marginLeft: "40px" }}>
        <div style={{ display: "flex" }} id="itemsList" className="itemsList">
          {infos.map((info) => (
            <CardComp key={info.id} info={info} />
          ))}
        </div>
=======
      <div id="Body"  className="body" style={{ marginLeft:"40px" }}>
        <div id="itemsList" className="itemsList"></div>
            <CardComp info={info}/>   
>>>>>>> 9609113d835a22e08c05884bf36221940970997b
      </div>
    </div>
  );
}

export default App;

