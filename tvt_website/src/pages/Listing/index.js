import React from 'react';
import { useState,useEffect,useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from "../../components/product";
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MyContext } from '../../App';
import Sidebar from '../../components/Sidebar';

const Listing = (props) => {
    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
    const [showPerPage, setHhowPerPage] = useState(3);

    const [data, setData] = useState([]);

    const context = useContext(MyContext);

    const [currentId, setCurrentId] = useState()

    let { id } = useParams();

    var itemsData = [];

    // DIFFERENT FILTERING MECHANISMS
    

    const filterByBrand = (keyword) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.map((item__, index__) => {
                                if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                                    //console.log(item__)
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                }


                            })

                        })


                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {
                                    if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                                        itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                    }

                                })

                            }
                        })
                }

            })



        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        //console.log(itemsData)


        setData(list2);

        window.scrollTo(0, 0)

    }




    const filterByPrice = (minValue, maxValue) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {
                    if (id === item.cat_name.toLowerCase()) {
                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.length !== 0 &&
                                    item_.products.map((product, prodIndex) => {
                                        let price = parseInt(product.price.toString().replace(/,/g, ""))
                                        if (minValue <= price && maxValue >= price) {
                                            itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                        }

                                    })
                            })
                    }
                }

                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((product) => {
                                    let price = parseInt(product.price.toString().replace(/,/g, ""))
                                    if (minValue <= price && maxValue >= price) {
                                        itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                    }
                                })

                            }
                        })
                }

            })

        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        setData(list2);
    }





    const filterByRating = (keyword) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    if (item.cat_name.toLowerCase() == id.toLowerCase()) {

                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.map((item__, index__) => {
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            })


                    }
                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {

                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })

                                })

                            }
                        })
                }

            })




        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);

        setData(list2);

        data?.map((item)=>{
            if(item.rating===keyword){
                itemsData.push({ ...item, parentCatName: item.cat_name, subCatName: item.cat_name })
            }
        })


        const list3 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
      
        setData(list2);


        window.scrollTo(0, 0)

    }

    // CATEGORIES AND ITEMS

    useEffect(() => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    if (item.cat_name.toLowerCase() == id.toLowerCase()) {

                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.map((item__, index__) => {
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            })


                    }
                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() === id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {

                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })

                                })

                            }
                        })
                }

            })




        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);

        setData(list2);
        // console.log(list2);

        window.scrollTo(0,0);

        }, [id])

        


  return (
    <section className='listingPage'>
        <div className='container-fluid'>
            <div className='breadcrumb flex-column'>
                <h1 className='text-capitalize'>{id}</h1>
                <ul className='list list-inline'>
                    <li className=' list-inline-item'>
                        <Link className='text-capitalize' to={'/'}>Home</Link>
                    </li>
        

                    <li className='list-inline-item'>
                        <Link to={`/cat/${sessionStorage.getItem('cat')}`} className='text-capitalize'> {sessionStorage.getItem('cat')} </Link>
                    </li>

                    {
                        props.single === false &&
                        <li className='list-inline-item'>
                            <Link to={''} className="text-capitalize"> / {id.split('-').join(' ')}</Link>
                        </li>
                    }
                   
                </ul>
            </div>
        </div>

        <div className='listingData'>
            <div className='row'>
                <div className='col-md-3 sidebarWrapper'>
                   { 
                    data.length!==0 && 
                    <Sidebar data={props.data} currentCatData={data}/> 
                   }
                </div>
                <div className='col-md-9 rightContent homeProducts pt-0'>
                    <div className='topStrip d-flex align-items-center'>
                        <p className='mb-0'>We found <span className='primary-color'>{data.length} </span>items for you !</p>
                        <div className='ml-auto'>
                            <div className='d-flex align-items-center'>
                                <div className='tab_ position-relative'>
                                    <Button className='btn_ show-btn'><GridViewOutlinedIcon/>Show : 50 <KeyboardArrowDownRoundedIcon/> </Button>
                                    <ul className='dropdownMenu'>
                                        <li><Button className='align-items-center'>100</Button></li>
                                        <li><Button className='align-items-center'>150</Button></li>
                                        <li><Button className='align-items-center'>200</Button></li>
                                    </ul>  
                                </div>
                                <div className='tab_ position-relative ml-3'>
                                    <Button className='btn_ sort-btn'><FilterListRoundedIcon/>Sort By : Featured<KeyboardArrowDownRoundedIcon/></Button>
                                    <ul className='dropdownMenu dropdownMenu_1'>
                                        <li><Button className='align-items-center'>Featured</Button></li>
                                        <li><Button className='align-items-center'>Price : Low to High</Button></li>
                                        <li><Button className='align-items-center'>Price : High to Low</Button></li>
                                        <li><Button className='align-items-center'>Release Date</Button></li>
                                        <li><Button className='align-items-center'>Avg Rating</Button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productRow pl-2">
                        { data.length !== 0 &&
                            data.map((item,index)=>{
                                return(
                                    <div className="item" key={index}   >
                                        {/* console.log({index}); */}
                                        <Product tag={item.type} item={item}/>
                                    </div>
                                )
                            })
                        }
{/*                 
                        <div className="item">
                            <Product/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Listing;