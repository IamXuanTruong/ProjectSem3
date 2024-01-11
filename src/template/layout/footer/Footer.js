import './Footer.css';
import logo2 from "../../../images/logo-footer.png";
function Footer() {
    return (
        <>
            <div className="footer_page">
                <div className="footer">
                    <div className="logo_footer">
                        <img src={logo2}></img>
                        <h6 className="pt-2">CORPORATIONS
                            VIETNAM POST OFFICE</h6>
                        <p>Address: No.05PhamHung Street-MyDinh2-NamTuLiem-Hanoi-Vietnam</p>
                    </div>
                    <div className="main_footer">
                        <div className="row">
                            <div className="col-lg-3">
                                <h5>Introduce</h5>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Information Services</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> General information</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Business information</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Quality information</a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h5>News</h5>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Activity news</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Promotional news</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Useful information</a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h5>Support</h5>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Return administrative procedure results</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Collect and pay for HCC</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Receiving administrative procedures</a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h5>Recruitment</h5>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Delivery</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Media advertisement</a>
                                </div>
                                <div className="footer_item">
                                    <a href=""><i class="fa-solid fa-chevron-right"></i> Logistics</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default Footer;