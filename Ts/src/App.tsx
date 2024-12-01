
const App = () => {
  type Person = {
    fullname:string;
    age:number;
    salary:number;
    isWorking:boolean;
    isMarrt: boolean;
    speciality:string;
  }
  const calculateİpoteca = (client:Person) =>{
      console.log(client);
      
  }
  const person:Person = {
    fullname: "Zahid ",
    age:14,
    salary:4000,
    isWorking:true,
    isMarrt: true,
    speciality:"string",
  }
  return (
    <div>
      <h1>TypeScript</h1>
      <h1>Vlue {a} </h1>
      <button onClick={() => { calculateİpoteca(person)}}>Change Value</button>
      </div>
  )
}

export default App