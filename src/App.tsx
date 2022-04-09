import ProductSelectionProvider from "./contextProvider/ProductSelectionProvider";
import ProductSelectionPage from "./components/pages/ProductSelectionPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ProductSelectionProvider>
        <ProductSelectionPage />
        {/* <div className="relative bg-black overflow-hidden">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div> */}
      </ProductSelectionProvider>
    </div>
  );
}

export default App;
