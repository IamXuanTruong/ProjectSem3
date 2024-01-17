import './Home.css';
import m1 from "../../../images/m1.jpg";
import m2 from "../../../images/m2.jpg";
import m3 from "../../../images/m3.jpg";
import m4 from "../../../images/m4.jpg";
import m5 from "../../../images/m5.jpg";
import m6 from "../../../images/m6.jpg";
import m7 from "../../../images/m7.jpg";
import m8 from "../../../images/m8.jpg";
import m9 from "../../../images/m9.jpg";
import m10 from "../../../images/m10.jpg";
import m11 from "../../../images/m11.png";
import m12 from "../../../images/m12.jpg";
import m13 from "../../../images/m13.jpg";
import m14 from "../../../images/m14.jpg";
import m15 from "../../../images/m15.jpg";
import bn1 from "../../../images/banner1.jpg";
import bn2 from "../../../images/banner2.jpg";
import bn3 from "../../../images/banner3.jpg";
import bn4 from "../../../images/banner4.jpg";
import bn5 from "../../../images/banner5.png";
import item1 from "../../../images/item1.png";
import item2 from "../../../images/item2.png";
import item4 from "../../../images/item4.png";
import item5 from "../../../images/item5.png";
import ok from "../../../images/ok.png";
import qc from "../../../images/qc.png";
import qcc from "../../../images/qcc.png";
import r1 from "../../../images/r1.png";
import r2 from "../../../images/r2.png";
import r3 from "../../../images/r3.png";
import r4 from "../../../images/r4.png";
import r5 from "../../../images/r5.png";
import r6 from "../../../images/r6.png";
import r7 from "../../../images/r7.png";
import r8 from "../../../images/r8.png";
import r9 from "../../../images/r9.png";
import r10 from "../../../images/r10.png";
import r11 from "../../../images/r11.png";
import r12 from "../../../images/r12.png";
import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';



function Home() {
    const [activeTab, setActiveTab] = useState('London');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };
    return (
        <>
            <div className="home_page">
                <div className="banner">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item ">
                                <img src={bn1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item active">
                                <img src={bn2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={bn3} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={bn4} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={bn5} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div className="checkbox">
                    <div className="box_check">
                        <div className="form_check">
                            <p><i class="fa-solid fa-location-crosshairs"></i> Postage Tracking</p>
                            <input placeholder="Enter postal code"></input>
                            <button>Check</button>
                        </div>
                        <div className="form_connect">
                            <div className="connect_item">
                                <a href="/office"> <i class="fa-solid fa-map-pin"></i>
                                    <p>Find the post office</p>
                                </a>
                            </div>
                            <div className="connect_item">
                                <a href="">
                                    <i class="fa-solid fa-calculator"></i>
                                    <p>Estimated freight</p>
                                </a>
                            </div>
                            <div className="connect_item">
                                <a href="/order">
                                    <i class="fa-solid fa-plus"></i>
                                    <p>Create orders</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service'>
                    <div className='service_main'>
                        <h3>SERVICE</h3>
                        <div id="carouselExampleControls" class="carousel slide mt-3 meme" data-ride="carousel" data-interval="2000">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r1}></img>
                                                </div>
                                                <a href=''>INSURED PARCEL</a>
                                            </div>

                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r2}></img>
                                                </div>
                                                <a href=''>SAVE POSTAGE</a>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r3}></img>
                                                </div>
                                                <a href=''>EXPRESS DELIVERY</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Registered mail is a service that accepts, transports and delivers mail to domestic and international receiving addresses; Parcels are assigned a serial number to track and locate during the delivery process.
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Postal Savings is a banking service jointly provided by Vietnam Post Corporation and Lien Viet Post Commercial Joint Stock Bank at Post Office Transaction Offices.
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    It is a high quality, fast service according to international standards
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='button_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="carousel-item ">
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r4}></img>
                                                </div>
                                                <a href=''>LIFE INSURANCES</a>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r5}></img>
                                                </div>
                                                <a href=''>RETIREMENT CREDIT</a>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r6}></img>
                                                </div>
                                                <a href=''>POST OFFICE WALLET</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <p>
                                                    These are life insurance services distributed at Vietnam Post
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    A loan service designed specifically for retirees and the elderly
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Vietnam Post provides e-wallet services under a Payment Intermediary license
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='button_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r7}></img>
                                                </div>
                                                <a href=''>PAYMENT SERVICES</a>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r8}></img>
                                                </div>
                                                <a href=''>CONSUMER GOODS</a>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r9}></img>
                                                </div>
                                                <a href=''>TRANSFER MONEY</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Pay for electricity, water and essential services on the web platform of Vietnam Post
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Distributed products are products in the fast-moving consumer goods industry such as home care products: laundry detergent, fabric softener, dishwashing liquid, house cleaning liquid...; Body care products: shampoo, conditioner, toothpaste...
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Vietnam Post Corporation's money transfer service is provided at Post Offices and Commune Cultural Post Offices nationwide.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='button_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r10}></img>
                                                </div>
                                                <a href=''>AUTO INSURANCE</a>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r11}></img>
                                                </div>
                                                <a href=''>COLLECTION OF PAYMENTS</a>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='carousel_context'>
                                                <div className='img_carousel'>
                                                    <img src={r12}></img>
                                                </div>
                                                <a href=''>PUBLICATION DISTRIBUTION</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Is a service that introduces, offers and sells insurance, and arranges the conclusion of auto insurance contracts through the network of post offices and service delivery points of Vietnam Post Corporation.
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    A service that allows customers to pay insurance premiums, installment loans, electricity, water, phone bills, etc. at the post office.
                                                </p>
                                            </div>
                                            <div className='col-lg-4'>
                                                <p>
                                                    Trading all kinds of publications: Books, newspapers, magazines at home and abroad; Release all kinds of Tet Calendars.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='button_carousel'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='link_carousel'>
                                                    <a href=''>See more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='banner_service'>
                        <img src={qcc}></img>
                    </div>
                </div>
                <div className="news">
                    <div className="new_context">
                        <div className="main_new">
                            <h3>News</h3>
                            <Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className='tabs'>
                                <Tab eventKey="1" title="Promotions & mini games">
                                    <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m1}></img>
                                            </div>
                                            <p className='name_hover'>Postmart.vn - Many attractive programs to welcome summer 2023</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>According to the representative of Postmart e-commerce platform, this summer will be the time when people are ready for explosive plans after a long period of being affected by the economic recession as well as the COVID-19 epidemic.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m2}></img>
                                            </div>
                                            <p className='name_hover'>Golden month incentives - Immediate discount of up to 300,000 VND when using international delivery services</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>From October 9, 2023 to October 31, 2023, for each order using international delivery services that meets the freight conditions, customers will receive a direct discount of 100,000 VND to 300,000 VND.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m3}></img>
                                            </div>
                                            <p className='name_hover'>Vietnam Post and LPBank award the program "Millions of gifts - Thousands of gratitude"</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>The promotion program "Millions of gifts - Thousands of gratitude" is LPBank's largest capital mobilization incentive program since its establishment for customers when depositing savings on the Postal system.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Okaka" className={`tabcontent ${activeTab === 'Okaka' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m4}></img>
                                            </div>
                                            <p className='name_hover'>Postmart.vn flash sale celebrates 77 years of tradition in the Postal industry</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>Join the Flash Sale program now to have the opportunity to own special products at extremely preferential prices.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="oke" className={`tabcontent ${activeTab === 'oke' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m5}></img>
                                            </div>
                                            <p className='name_hover'>Reduced International EMS rates, sending routes to Korea</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>Immediate discount of 7,500 VND/500gr for parcels weighing 10kg or more using International EMS service, sent to Korea</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <button
                                            className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('London')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m1}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Postmart.vn - Many attractive programs to welcome summer 2023</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Paris')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m2}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Golden month incentives - Immediate discount of up to 300,000 VND when using international delivery services</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Tokyo')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m3}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Vietnam Post and LPBank award the program "Millions of gifts - Thousands of gratitude"</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Okaka' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Okaka')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m4}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Postmart.vn flash sale celebrates 77 years of tradition in the Postal industry</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'oke' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('oke')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m5}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Reduced International EMS rates, sending routes to Korea</h5>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </Tab>
                                <Tab eventKey="2" title="Activity news">
                                    <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m6}></img>
                                            </div>
                                            <p className='name_hover'>Postmart.vn - Many attractive programs to welcome summer 2023</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>According to the representative of Postmart e-commerce platform, this summer will be the time when people are ready for explosive plans after a long period of being affected by the economic recession as well as the COVID-19 epidemic.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m7}></img>
                                            </div>
                                            <p className='name_hover'>Golden month incentives - Immediate discount of up to 300,000 VND when using international delivery services</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>From October 9, 2023 to October 31, 2023, for each order using international delivery services that meets the freight conditions, customers will receive a direct discount of 100,000 VND to 300,000 VND.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m8}></img>
                                            </div>
                                            <p className='name_hover'>Vietnam Post and LPBank award the program "Millions of gifts - Thousands of gratitude"</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>The promotion program "Millions of gifts - Thousands of gratitude" is LPBank's largest capital mobilization incentive program since its establishment for customers when depositing savings on the Postal system.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Okaka" className={`tabcontent ${activeTab === 'Okaka' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m9}></img>
                                            </div>
                                            <p className='name_hover'>Postmart.vn flash sale celebrates 77 years of tradition in the Postal industry</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>Join the Flash Sale program now to have the opportunity to own special products at extremely preferential prices.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="oke" className={`tabcontent ${activeTab === 'oke' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m10}></img>
                                            </div>
                                            <p className='name_hover'>Reduced International EMS rates, sending routes to Korea</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>Immediate discount of 7,500 VND/500gr for parcels weighing 10kg or more using International EMS service, sent to Korea</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <button
                                            className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('London')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m6}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Postmart.vn - Many attractive programs to welcome summer 2023</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Paris')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m7}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Golden month incentives - Immediate discount of up to 300,000 VND when using international delivery services</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Tokyo')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m8}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Vietnam Post and LPBank award the program "Millions of gifts - Thousands of gratitude"</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Okaka' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Okaka')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m9}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Postmart.vn flash sale celebrates 77 years of tradition in the Postal industry</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'oke' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('oke')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m10}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Reduced International EMS rates, sending routes to Korea</h5>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </Tab>
                                <Tab eventKey="3" title="Useful information">
                                    <div id="London" className={`tabcontent ${activeTab === 'London' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m11}></img>
                                            </div>
                                            <p className='name_hover'>Postmart.vn - Many attractive programs to welcome summer 2023</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>According to the representative of Postmart e-commerce platform, this summer will be the time when people are ready for explosive plans after a long period of being affected by the economic recession as well as the COVID-19 epidemic.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m12}></img>
                                            </div>
                                            <p className='name_hover'>Golden month incentives - Immediate discount of up to 300,000 VND when using international delivery services</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>From October 9, 2023 to October 31, 2023, for each order using international delivery services that meets the freight conditions, customers will receive a direct discount of 100,000 VND to 300,000 VND.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m13}></img>
                                            </div>
                                            <p className='name_hover'>Vietnam Post and LPBank award the program "Millions of gifts - Thousands of gratitude"</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>The promotion program "Millions of gifts - Thousands of gratitude" is LPBank's largest capital mobilization incentive program since its establishment for customers when depositing savings on the Postal system.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Okaka" className={`tabcontent ${activeTab === 'Okaka' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m14}></img>
                                            </div>
                                            <p className='name_hover'>Postmart.vn flash sale celebrates 77 years of tradition in the Postal industry</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>Join the Flash Sale program now to have the opportunity to own special products at extremely preferential prices.</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="oke" className={`tabcontent ${activeTab === 'oke' ? 'active' : ''}`}>
                                        <div className='content-hover'>
                                            <div className='img_content'>
                                                <img src={m15}></img>
                                            </div>
                                            <p className='name_hover'>Reduced International EMS rates, sending routes to Korea</p>
                                            <p>June 2, 2023 June 2, 2023</p>
                                            <p>Immediate discount of 7,500 VND/500gr for parcels weighing 10kg or more using International EMS service, sent to Korea</p>
                                            <div className='link_hover'>
                                                <a href=''>See more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <button
                                            className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('London')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m11}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Postmart.vn - Many attractive programs to welcome summer 2023</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Paris')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m12}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Golden month incentives - Immediate discount of up to 300,000 VND when using international delivery services</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Tokyo')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m13}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Vietnam Post and LPBank award the program "Millions of gifts - Thousands of gratitude"</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'Okaka' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('Okaka')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m14}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Postmart.vn flash sale celebrates 77 years of tradition in the Postal industry</h5>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            className={`tablinks ${activeTab === 'oke' ? 'active' : ''}`}
                                            onMouseOver={() => openCity('oke')}
                                        >
                                            <div className="context_maketting">
                                                <div className="img_maketting">
                                                    <img src={m15}></img>
                                                </div>
                                                <div className="text_maketting">
                                                    <h5>Reduced International EMS rates, sending routes to Korea</h5>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                        <div className="banner_new">
                            <img src={qc}></img>
                        </div>
                    </div>
                </div>
                <div className="statistical">
                    <h3>IMPRESSIVE DATA</h3>
                    <div className="main_statistical">
                        <div className="item_statistical">
                            <i class="fa-solid fa-tent-arrow-left-right"></i>
                            <h6>33.000.000</h6>
                            <p>Financial Transactions</p>
                        </div>
                        <div className="item_statistical">
                            <i class="fa-solid fa-plus"></i>
                            <h6>13.330</h6>
                            <p>Post Office Transaction Point</p>
                        </div>
                        <div className="item_statistical">
                            <i class="fa-solid fa-box-archive"></i>
                            <h6>1.851.000.000</h6>
                            <p>Parcel Shipped</p>
                        </div>
                    </div>
                </div>
                <h3 className=" text_office">POST OFFICE NO</h3>
                <div className="office">
                    <div className="app">
                        <div className="app_col1">
                            <div className="item_app">
                                <div className="img_item">
                                    <img src={item1}></img>
                                </div>
                                <div className="text_item">
                                    <h6>My Vietnam Post Plus</h6>
                                    <a href="">Download now</a>
                                </div>
                            </div>
                            <div className="item_app">
                                <div className="img_item">
                                    <img src={item2}></img>
                                </div>
                                <div className="text_item">
                                    <h6>PostMart Bán hàng</h6>
                                    <a href="">Download now</a>
                                </div>
                            </div>
                            <div className="item_app">
                                <div className="img_item">
                                    <img src={item4}></img>
                                </div>
                                <div className="text_item">
                                    <h6>Vpostcode</h6>
                                    <a href="">Download now</a>
                                </div>
                            </div>
                        </div>
                        <div className="app_col2">
                            <div className="item_app">
                                <div className="img_item">
                                    <img src={item1}></img>
                                </div>
                                <div className="text_item">
                                    <h6>PostMart</h6>
                                    <a href="">Download now</a>
                                </div>
                            </div>
                            <div className="item_app">
                                <div className="img_item">
                                    <img src={item2}></img>
                                </div>
                                <div className="text_item">
                                    <h6>Công dân số</h6>
                                    <a href="">Download now</a>
                                </div>
                            </div>
                            <div className="item_app">
                                <div className="img_item">
                                    <img src={item5}></img>
                                </div>
                                <div className="text_item">
                                    <h6>PostPay</h6>
                                    <a href="">Download now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner_office">
                        <img src={ok}></img>
                    </div>
                </div>
            </div >

        </>
    )
} export default Home;