import ProductSelectionProvider from "./contextProvider/ProductSelectionProvider";
import ProductSelectionPage from "./components/pages/ProductSelectionPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ProductSelectionProvider>
        <ProductSelectionPage />
      </ProductSelectionProvider>
    </div>
  );
}

export default App;
