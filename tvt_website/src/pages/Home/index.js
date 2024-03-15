import React from "react";
import './style.css';
import '../../index.css';
import Product from "../../components/product";

import CatSlider from "../../components/catSlider";

const Home =()=>{
    return(
        <home>
            <div className="container">
                <h1>Content is present here</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or pu.</p>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or pu.</p>    
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or pu.</p>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or pu.</p>           
            </div>
            <CatSlider/>

            <section className="homeProducts">
                <div className="container-fluid">
                    {/* <div className="d-flex align-items-center">
                       <h2 className="hd">Popular Products</h2>
                       <ul className="list list-inline">
                            <li className="list list-inline-item"></li>
                       </ul>
                    </div> */}
                    <div className="productRow">
                        <div className="item">
                            <Product/>
                        </div>
                    </div>
                </div>
            </section>
        </home>
    )
}

export default Home;