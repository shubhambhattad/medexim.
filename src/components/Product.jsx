import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { urlFor } from "../client";
import CategoryCard from "./CategoryCard";

function Product() {
  const [categoryData, setCategoryData] = useState([]);

  const fetchData = async () => {
    const query = "*[_type == 'category']";
    const data = await sanityClient.fetch(query);
    console.log("Category Data:", data);
    setCategoryData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <body>
      <section className="space light">
        <div className="container container-custom">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-style1">
                <span>Our Services</span>
                <h2>Our Categories For You for You</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="service-slider">
                <div className="service-block yellow">
                  <img src="images/service-icon1.png" alt="#" />
                  <h3>Dental Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore{" "}
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg1.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                {categoryData.map((category) => (
                  <div className=" " key={category._id}>
                    <div className=" service-block blue">
                      <img src="images/service-icon3.png" alt="#" />
                      <h3>{category.name}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore
                      </p>
                      <a href="#" className="btn btn-dark">
                        GET THIS
                      </a>
                      <div className="service-bg-icon">
                        <img
                          src="images/services-bg3.png"
                          className="img-fluid"
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container container-custom">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-style1">
                <span>Our Services</span>
                <h2>Our Categories For You for You</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="service-slider">
                <div className="service-block yellow">
                  <img src="images/service-icon1.png" alt="#" />
                  <h3>Dental Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore{" "}
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg1.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="service-block green">
                  <img src="images/service-icon2.png" alt="#" />
                  <h3>Eye Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg2.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="service-block blue">
                  <img src="images/service-icon3.png" alt="#" />
                  <h3>Uterine Tonic</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg3.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="service-block blue">
                  <img src="images/service-icon3.png" alt="#" />
                  <h3>Protein Suppliments</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg3.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="service-block blue">
                  <img src="images/service-icon3.png" alt="#" />
                  <h3>Anaemia Manag</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg3.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="service-block blue">
                  <img src="images/service-icon3.png" alt="#" />
                  <h3>Uterine Tonic</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg3.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="service-block blue">
                  <img src="images/service-icon3.png" alt="#" />
                  <h3>Uterine Tonic</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg3.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="service-block green">
                  <img src="images/service-icon3.png" alt="#" />
                  <h3>Uterine Tonic</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor incididunt ut labore
                  </p>
                  <a href="#" className="btn btn-dark">
                    GET THIS
                  </a>
                  <div className="service-bg-icon">
                    <img
                      src="images/services-bg4.png"
                      className="img-fluid"
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Tried the object thing */}
        {/* <div className="container container-custom">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-style1">
                <span>Our Services</span>
                <h2>Our Categories For You for You</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="service-slider">
                {titles.map((title, index) => (
                  <div className="service-block blue" key={index}>
                    <img src="images/service-icon1.png" />
                    <h3>{title}</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eius mod tempor incididunt ut labore
                    </p>
                    <a href="#" className="btn btn-dark">
                      GET THIS
                    </a>
                    <div className="service-bg-icon">
                      <img
                        src="images/services-bg1.png"
                        className="img-fluid"
                        alt="#"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </body>
  );
}

export default Product;
// import React from "react";

// function Product() {
//   return (
//     <body>
//       <section className="space light">
//         <div className="container container-custom">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="heading-style1">
//                 <span>Our Services</span>
//                 <h2>Our Categories For You for You</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="service-slider">
//                 {/* <div className="service-block yellow">
//                   <img src="images/service-icon1.png" alt="#" />
//                   <h3>Dental Care</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore{" "}
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg1.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div> */}
//                 {/* <div className="service-block green">
//                   <img src="images/service-icon2.png" alt="#" />
//                   <h3>Eye Care</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg2.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div> */}
//                 <div className="service-block blue">
//                   <img src="images/service-icon3.png" alt="#" />
//                   <h3>Uterine Tonic</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg3.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div>
//                 <div className="service-block blue">
//                   <img src="images/service-icon3.png" alt="#" />
//                   <h3>Protein Suppliments</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg3.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div>
//                 <div className="service-block blue">
//                   <img src="images/service-icon3.png" alt="#" />
//                   <h3>Anaemia Manag</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg3.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div>
//                 <div className="service-block blue">
//                   <img src="images/service-icon3.png" alt="#" />
//                   <h3>Uterine Tonic</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg3.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div>
//                 <div className="service-block blue">
//                   <img src="images/service-icon3.png" alt="#" />
//                   <h3>Uterine Tonic</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg3.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div>
//                 {/* <div className="service-block green">
//                   <img src="images/service-icon3.png" alt="#" />
//                   <h3>Uterine Tonic</h3>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eius mod tempor incididunt ut labore
//                   </p>
//                   <a href="#" className="btn btn-dark">
//                     GET THIS
//                   </a>
//                   <div className="service-bg-icon">
//                     <img
//                       src="images/services-bg4.png"
//                       className="img-fluid"
//                       alt="#"
//                     />
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </body>
//   );
// }

// export default Product;
