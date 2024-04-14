import React from "react";
import './style.css';
import '../../index.css';
import Product from "../../components/product";
import CatSlider from "../../components/catSlider";
import { useState,useEffect } from 'react';

const Home =(props)=>{

    const [prodData, setprodData] = useState(props.data)
    const [catArray, setcatArray] = useState([])
    const [activeTab, setactiveTab] = useState();
    const [activeTabIndex, setactiveTabIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);
    const [bestSells, setBestSells] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    // const productRow=useRef();
    // const context = useContext(MyContext);
    const catArr = [];

    // FOR DYNAMIC PRODUCTS DISPLAY
    useEffect(() => {

        prodData.length !== 0 &&
            prodData.map((item) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catArr.push(item_.cat_name);
                    })
            })

        const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
        setcatArray(list2)

        setactiveTab(list2[0])

        window.scrollTo(0,0);

    }, [])





    useEffect(() => {
        var arr = [];
        setActiveTabData(arr);
        prodData.length !== 0 &&
            prodData.map((item, index) => {
                item.items.map((item_, index_) => {
                    if (item_.cat_name === activeTab) {
                        {
                            item_.products.length !== 0 &&
                                item_.products.map((product) => {
                                    arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            setActiveTabData(arr)
                            setTimeout(()=>{
                                setIsLoadingProducts(false);
                            },[1000]);
                        }
                    }
                })

            })

    }, [activeTab, activeTabData])





    const bestSellsArr = [];

    useEffect(() => {
        prodData.length !== 0 &&
            prodData.map((item) => {
                if (item.cat_name === "Electronics") {
                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.length !== 0 &&
                                item_.products.map((product, index) => {
                                    bestSellsArr.push(product);
                                })
                        })
                }

            });


        setBestSells(bestSellsArr);

    }, [])







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
                    <div className='d-flex align-items-center homeProductsTitleWrap'>
                    <h2 className='hd'>Popular Products</h2>
                        <ul className='list list-inline ml-auto filterTab mb-0 res-full'>

                                    {
                                            catArray.length !== 0 &&
                                        catArray.map((cat, index) => {
                                            return (
                                                <li className="list list-inline-item">
                                                    <a className={`cursor text-capitalize 
                                                        ${activeTabIndex === index ? 'act' : ''}`}
                                                        onClick={() => {
                                                            setactiveTab(cat)
                                                            setactiveTabIndex(index);
                                                            // productRow.current.scrollLeft=0;
                                                            // setIsLoadingProducts(true);
                                                        }}
                                                    >
                                                        {cat}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                            <div className={`productRow ${isLoadingProducts===true && 'loading'}`}>
                                {
                                    activeTabData.length !== 0 &&
                                    activeTabData.map((item, index) => {
                                        return (
                                            <div className='item' key={index}>
                                                <Product tag={item.type} item={item} />
                                            </div>
                                        )
                                    })
                                }
                    </div>
                </div>
            </section>
        </home>
    )
}

export default Home;