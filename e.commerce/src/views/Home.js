import React from 'react'
import img1 from '../image/images (2).jpg'
import img2 from '../image/images (1).jpg'
import img3 from '../image/jacobandcocom_119601716.jpg'
import img4 from '../image/images.jpg'
import img5 from '../image/Untitled-1.Bugatpsd.jpg'


const Products = () => {
    
    return (
        <div>
            <div className="container-fluid  ">
                <div className="mb-5 mt-5 mx-5  col-sm-10 col-lg-10 d-flex justify-content-between align-content-center ">
                   <div className="col-md-7 col-sm-5  ">
                        <img className="bg-dark img-fluid mb-5" src={img5} alt=""  />
                    
                    </div>     
                   <div className="mx-5 col-lg-6 col-md-5 col-sm-8">
                         <h3 className="text-dark  ">A new time for Bugatti</h3>
                         <p>In collaboration with Jacob & Co. Bugatti embarks into a new era: the partnership between the French manufacturer of hyper-sportscars Bugatti and the New York & Geneva-based, leading supplier of highly complex timepieces Jacob & Co. not only unites two companies that have always valued innovative design, but who have passionately expanded the boundaries of what is mechanically possible. Now both pioneers will create a range of exclusive Bugatti branded products together. Jacob Arabov, founder of Jacob & Co., compares the sensation aroused by his sophisticated timepieces with the same adrenaline rush that is unleashed by the mere sight of the Bugatti Chiron: a feeling of energy, movement and strength that is almost impossible to hold back.</p>
                   </div>
                  
                </div>
                <div className="mt-1 ">
                    <div className=" d-flex col-lg-10 mx-5 mt-5">
                        <div className="col-lg-6 col-sm-6 ">
                            <h3>Twin Turbo Furious Bugatti</h3>
                            <p className="font-size">This limited edition of an outstandingly detailed Jacob & Co. masterpiece was modeled after the Bugatti high-performance sportscars. Their exceptional design pays homage to Bugatti's Edition Chiron Sport "110 Years Bugatti". The turquoise dial is adorned with the Bugatti crest and the power reserve indicator has been renamed to "Fuel". Only 39 individually numbered pieces of this stunning watch will be created.</p>
                        </div>
                         <div className=" col-sm-3 d-flex mx-5">
                            <img className="mx-1 mt-5 img-fluid " src={img1} alt="" />
                            <img className="mx-1 img-fluid " src={img3} alt="" />
                         </div>   
                     </div>
         
                    <div className="mx-4 mt-5 ">
                      
                        <div className=" ">
                            <div className="col-md-10 col-sm-5   d-flex  ">
                                <img className="bg-dark mx-3 img-fluid" src={img2} alt=""  />
                                <img className=" mx-4 mt-1 img-fluid" src={img4} alt=""  />
                            </div>
                            <div className="mt-5">
                                <h3>Epic X Chrono Bugatti</h3>
                                <p className="">Limited to just 110 examples, this special edition "Bugatti Chrono Edition Limitée 110 Ans" commemorates the founding of Bugatti by Ettore Bugatti in 1909. The design of the dial underlines Bugatti's heritage through the colors of the French Tricolore. The completely new, custom-made carbon case and a special rubber strap, inspired by the rear of the Bugatti Chiron, also celebrate the high-profile partnership, as does the legendary "EB" logo on the buckle of the luxury watch.</p>
                            </div> 

                        </div>
                      
                    </div>   
                </div>
            </div>
       
        </div>
    )
}

export default Products
