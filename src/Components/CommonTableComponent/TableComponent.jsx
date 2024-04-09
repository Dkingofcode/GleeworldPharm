import  { useState, useEffect, useRef } from 'react';
import "./module.tablecomponent.css"
import Search from '../../Components/SearchComponent/Search';
import BoxAndIcon from '../../Components/BoxAndIconComponent/BoxAndIcon';
import filterIcon from "../../assets/images/FilterIcon.svg";
import deleteIcon from "../../assets/images/deleteIcon.svg";
import Panadol from '../../assets/images/Panadol.svg';
import filterArrow from '../../assets/images/filterArrow.svg';
//import SearchIcon from '../../assets/icons/Search.svg';
import downloadIcon from '../../assets/images/downloadIcon.svg';
import approved from "../../assets/images/approved.svg";
import pending from "../../assets/images/pending.svg";

const TableComponent = ({pathname, topleftText, showlast, placeholder, Data, withImage}) => {
    console.log(Data);
    const [action, setAction] = useState(null);
    const [click, setClick] = useState(false);
    const actionsRef = useRef(null);

    const actionClicked = (index) => {
        setAction(index);
        setClick(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (actionsRef.current && !actionsRef.current.contains(event.target)) {
                setAction(null);
                setClick(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <section className='productTable'>
                <div className='product-top-section'>
                    <h4>{topleftText}</h4>
                    {showlast && (
                        <div className='filter' >
                            <p>Last 7 days</p>
                            <img src={filterArrow} alt="" />
                        </div>
                    )}
                </div>

                <div className='table '>
                    <div className='tableheader'>
                        <Search text={placeholder}/>
                        <div className='tableButtons'>
                            <BoxAndIcon
                                icon={filterIcon}
                                text="Filter"
                                border=".5px solid #000040"
                                className="filter-box"
                            />
                            {pathname === "/purchase" && (
                                <BoxAndIcon
                                    text="Download"
                                    border=".5px solid #000040"
                                    className="filter-box"
                                    bgColor="#000040"
                                    icon={downloadIcon}
                                    color="white"
                                />
                            )}
                            <BoxAndIcon
                                icon={deleteIcon}
                                text="Delete"
                                bgColor="red"
                                flexDirection="row-reverse"
                                color="white"
                                border="none"
                                className="filter-box"
                            />
                        </div>
                    </div>

                    <div className="head-container">
                        {/* Headers */}
                    </div>

                    <div className="body-container">
                        {Data.map((item, index) => (
                            <div key={index}>
                                <div className={!withImage ? "body-content-padd body-content" : "body-content"}>
                                    <input type="radio" name="" id=""/>
                                    <div className="product-name-image">
                                        {withImage && (
                                            <img src={Panadol} alt=""/>
                                        )}
                                        <p className="body-product-name">{item.col1}</p>
                                    </div>
                                    <p className="body-product-price">{item.col2}</p>
                                    <p className="body-product-category">{item.col3}</p>
                                    <p className="body-product-brand">{pathname === "/admins" ? item.col4 : item.col4}</p>
                                    {pathname === "/customers" || pathname === "/admins" || pathname === "/pharmacies" ? (
                                        <img src={item.col2 === "Approved" ? approved : pending} alt=""
                                             className="body-status-img body-product-quantity "/>
                                    ) : (
                                        <p className="body-product-quantity">{item.col5}</p>
                                    )}
                                    {pathname === "/purchase" || pathname === "/products" ? (
                                        <p className={pathname === "/purchase" ? "body-product-action body-product-supplier" : "body-product-action"}>{item.col6}</p>
                                    ) : (
                                        <p onClick={() => actionClicked(index)} className="body-product-action">...</p>
                                    )}
                                    {action === index && click && (
                                        <div ref={actionsRef} className="actions-container">
                                            <div className="action-top">View</div>
                                            <div className="action-mid">Share</div>
                                            <div className="action-bottom">Delete</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TableComponent;
