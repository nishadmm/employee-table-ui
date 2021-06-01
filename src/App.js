import Header from "./components/layouts/Header";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid row row-cols-1 row-cols-md-2 mt-3 ">
        <div>
          <Form />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
