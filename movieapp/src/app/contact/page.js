"use client"; 
import React, { useState } from "react";

const page = () => {
  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const handlesubmit=async ()=>{
try {
  const res=await fetch('/api/contact',{
    method:'POST',
    headers:{"Content_type":"application/json"},
    body:JSON.stringify({
      firstname:user.firstname,
      lastname:user.lastname,
      email:user.email,
      phone:user.phone,
      message:user.message
    })
  });

} catch (error) {
  console.log(e);
}
  }
  const handlechange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setuser((prevuser)=>({...prevuser,[name]:value}));
    
  }
  return (
    <>
      <div>
        {/* component */}
        <div className="flex justify-center items-center w-screen h-screen bg-white">
          {/* COMPONENT CODE */}
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <form onSubmit={handlesubmit()}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="firstname"
                    type="text"
                    placeholder="First Name*"
                    autoComplete="off"
                    onChange={handlechange}
                    value={user.firstname}
                    required
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="lastname"
                    type="text"
                    placeholder="Last Name*"
                    autoComplete="off"
                    onChange={handlechange}
                    value={user.lastname}
                    required
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    placeholder="Email*"
                    autoComplete="off"
                    onChange={handlechange}
                    value={user.email}
                    required
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="phone"
                    type="number"
                    placeholder="Phone*"
                    autoComplete="off"
                    onChange={handlechange}
                    value={user.phone}
                    required
                  />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Message*"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    defaultValue={""}
                    required
                    name="message"
                    autoComplete="off"
                    onChange={handlechange}
                    value={user.message}
                  />
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
              <div className="flex flex-col text-white">
                <h1 className="font-bold uppercase text-4xl my-4">
                  Drop in our office
                </h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.
                  Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
                  ex.
                </p>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Main Office</h2>
                      <p className="text-gray-400">
                        5555 Tailwind RD, Pleasant Grove, UT 73533
                      </p>
                    </div>
                  </i>
                </div>
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2"></i>
                    </div>
                    <i className="fas fa-phone-alt pt-2 pr-2">
                      <div className="flex flex-col">
                        <h2 className="text-2xl">Call Us</h2>
                        <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                        <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                      </div>
                    </i>
                  </div>
                  <i className="fas fa-phone-alt pt-2 pr-2">
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                      <a
                        href="https://www.facebook.com/ENLIGHTENEERING/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                      >
                        <i className="fab fa-facebook-f text-blue-900"></i>
                      </a>
                      <i className="fab fa-facebook-f text-blue-900">
                        <a
                          href="https://www.linkedin.com/company/enlighteneering-inc-"
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                        >
                          <i className="fab fa-linkedin-in text-blue-900"></i>
                        </a>
                        <i className="fab fa-linkedin-in text-blue-900"></i>
                      </i>
                    </div>
                    <i className="fab fa-facebook-f text-blue-900">
                      <i className="fab fa-linkedin-in text-blue-900"></i>
                    </i>
                  </i>
                </i>
              </div>
              <i className="fas fa-map-marker-alt pt-2 pr-2">
                <i className="fas fa-phone-alt pt-2 pr-2">
                  <i className="fab fa-facebook-f text-blue-900">
                    <i className="fab fa-linkedin-in text-blue-900"></i>
                  </i>
                </i>
              </i>
            </div>
            <i className="fas fa-map-marker-alt pt-2 pr-2">
              <i className="fas fa-phone-alt pt-2 pr-2">
                <i className="fab fa-facebook-f text-blue-900">
                  <i className="fab fa-linkedin-in text-blue-900"></i>
                </i>
              </i>
            </i>
          </div>
          <i className="fas fa-map-marker-alt pt-2 pr-2">
            <i className="fas fa-phone-alt pt-2 pr-2">
              <i className="fab fa-facebook-f text-blue-900">
                <i className="fab fa-linkedin-in text-blue-900">
                  {/* COMPONENT CODE */}
                </i>
              </i>
            </i>
          </i>
        </div>
        <i className="fas fa-map-marker-alt pt-2 pr-2">
          <i className="fas fa-phone-alt pt-2 pr-2">
            <i className="fab fa-facebook-f text-blue-900">
              <i className="fab fa-linkedin-in text-blue-900">
                {/* BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
              </i>
            </i>
          </i>
        </i>
      </div>
    </>
  );
};

export default page;
