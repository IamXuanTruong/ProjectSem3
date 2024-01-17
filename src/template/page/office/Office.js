import './Office.css';
import bt from "../../../images/banner-web-1.png"
import { useEffect } from 'react';
function Office() {

    return (
        <>
            <div className="office_page">
                <div className='banner_office'>
                    <img src={bt}></img>
                </div>
                <h3 className='m-5'><i class="fa-solid fa-map-location-dot"></i> Search post office</h3>
                <div className='main_office'>
                    <div className='Search_office'>
                        <input placeholder='Enter the address you want to search'></input>
                        <i class="fa-regular fa-circle-dot"></i>
                    </div>
                    <div className='main_map'>
                        <div className='address'>
                            The overflow property specifies what should happen if content overflows an element's box.
                            This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.
                            Note: The overflow property only works for block elements with a specified height.
                            The overflow property specifies what should happen if content overflows an element's box.
                            This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.
                            Note: The overflow property only works for block elements with a specified height.
                            The overflow property specifies what should happen if content overflows an element's box.
                            This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.
                        </div>
                        <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1704960816883!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default Office;