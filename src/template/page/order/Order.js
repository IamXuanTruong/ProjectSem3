import './Order.css';
function Order() {
    return (
        <>
            <div className="Order_page">
                <form>
                    <div className='form_user'>
                        <div className='profile_user'>
                            <div className='text_form_user'>
                                <div className='icon_form_user'>
                                    <i class="fa-solid fa-user-plus"></i>
                                    <h6 className='p-1'>Sender</h6>
                                </div>
                                <div className='icon_form_user'>
                                    <p>Manage sender information</p>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                            <div className='data_form'>
                                <div className='item_data'>
                                    <label>Name:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Phone:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Email:</label>
                                    <input></input>
                                </div>
                            </div>
                        </div>
                        <div className='profile_user'>
                            <div className='text_form_user'>
                                <div className='icon_form_user'>
                                    <i class="fa-solid fa-user-check"></i>
                                    <h6 className='p-1'>Receiver</h6>
                                </div>
                                <div className='icon_form_user'>
                                    <p>Receive goods at the post office</p>
                                    <i class="fa-regular fa-square"></i>
                                </div>

                            </div>
                            <div className='data_form'>
                                <div className='item_data'>
                                    <label>Name:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Phone:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Email:</label>
                                    <input></input>
                                </div>
                            </div>
                        </div>
                        <div className='profile_user'>
                            <div className='text_form_user'>
                                <div className='icon_form_user'>
                                    <i class="fa-solid fa-truck-fast"></i>
                                    <h6>Select service</h6>
                                </div>
                            </div>
                            <div className='data_form'>
                                <select>
                                    <option>ok</option>
                                    <option>ok</option>
                                    <option>ok</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='form_order'>
                        <div className='profile_user'>
                            <div className='text_form_user'>
                                <div className='icon_form_user'>
                                    <i class="fa-solid fa-box-open"></i>
                                    <h6 className='p-1'>Commodity information</h6>
                                </div>
                            </div>
                            <div className='data_form'>
                                <div className='item_data'>
                                    <label>Code orders:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Product name:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Quantity:</label>
                                    <input type='number'></input>
                                </div>
                                <div className='item_data'>
                                    <label>Weight:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Estimated value:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Size:</label>
                                    <input></input>
                                </div>
                                <div className='item_data'>
                                    <label>Descripion:</label>
                                    <textarea rows="4" cols="50"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='profile_user'>
                            <div className='text_form_user'>
                                <div className='icon_form_user'>
                                    <i class="fa-solid fa-coins"></i>
                                    <h6>Transport fee</h6>
                                </div>
                            </div>
                            <div className='price_cod'>
                                <div className='money_ship'>
                                    <h6>Shipping fee</h6>
                                    <p><i class="fa-solid fa-truck-fast"></i> Hang ship</p>
                                    <h6>20000 vnd</h6>

                                </div>
                                <div className='item_cod'>
                                    <h6>Freight payer</h6>
                                    <input type="radio" id="age1" name="age" value="30" />
                                    <label for="age1">Sender</label>
                                    <br />
                                    <input type="radio" id="age1" name="age" value="30" />
                                    <label for="age1">Receiver</label>
                                </div>
                            </div>
                            <hr />

                            <div className='send_form'>
                                <button className='send'>Send now</button>
                                <button className='save'>Save draft</button>
                                <button className='cancel'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
} export default Order;