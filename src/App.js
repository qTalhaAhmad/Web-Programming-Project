
import  NavComp  from './components/navbar';
import CardComp from './components/card';

function App() {
  const info ={price:'300', name:"Tops" , disp:"dsfjsidjfijivdfjghdfjkg hhdkhwktheruifhewuifhwfheruifhweivdfvn"}
  return (
    <div className="App">
      <NavComp />
      <div id="Body"  className="body" style={{ marginLeft:"40px" }}>
        <div id="itemsList" className="itemsList"></div>
            <CardComp info={info}/>
      </div>
    </div>
  );
}

export default App;
