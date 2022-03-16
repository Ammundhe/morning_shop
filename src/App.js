import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Footer from "./component/Footer";
import ProductDetails from "./component/ProductDetails";
import "./App.css";


const App=()=>{
    
    return(
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Products/>} />
                    <Route path="/Product/:productId" element={<ProductDetails/>} />
                </Routes>

                <Footer/>
            </Router>
        </div>
    )
}
export default App;