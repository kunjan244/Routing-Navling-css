

const Contact =()=>{
    return(
        <>
        <div className="contact_info">
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-lg-10  offset=lg-2  p-10 m-5 d-flex justify-content-between ">
                        {/*phone number*/}
                        <div className="contact_info_item d-flex jusify-content-start align-items-center shadow-lg p-4 mb-4">
                            <img src="" alt="img1" />

                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            phone
                            </div>
                            <div className="contact_info_text">
                            +91 1234567890
                            </div>
                            </div>

                        </div>
                        <div className="contact_info_item d-flex jusify-content-start align-items-center shadow-lg p-4 mb-4">
                            <img src="" alt="2" />

                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            Email
                            </div>
                            <div className="contact_info_text">
                            +91 kunjan2411@gmail.com
                            </div>
                            </div>

                        </div>
                        <div className="contact_info_item d-flex jusify-content-start align-items-center shadow-lg p-4 mb-4">
                            <img src="" alt="3" />

                        <div className="contact_info_content">
                        <div className="contact_info_title">
                            Address
                            </div>
                            <div className="contact_info_text">
                            +91 pune.........
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/*contact us form*/}
    <div className="contact_form">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 shadow-lg p-4 mb-4">
                    <div className="contact_form_title py-5 text-success">
                        <div className="contact_form_title">
                            Get in touch
                        </div>
                        <form id="contact_form">
                            <div className="contact_form_name d-flex justify-content-between align-items-between shadow-sm p-4 mb-4">
                                <input type="text" id="contact_form_name"
                                className="contact_form_name input_field"
                                placeholder="your name" required="true" />
                                
                                <input type="email" id="contact_form_email"
                                className="contact_form_email input_field"
                                placeholder="your email" required="true" />

                               <input type="number" id="contact_form_phone"
                                className="contact_form_phone input_field"
                                placeholder="your phone number" required="true" />
                                
                            </div>
                            <div className="contact_form_text">
                                <textarea className="text_field contact_form_mesaage"
                                placeholder="Message" cols="80" rows="5"></textarea>
                                </div>



                            <div className="contact_form_button py-2 ">
                            <button type="submit" className="btn btn-info">send Message</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
       

    
        </>
    );
}
export default Contact;











