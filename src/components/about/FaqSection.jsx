import React, { useState } from 'react'


const items = [
  {
    title: 'How can we improve the lead generation process?',
    content: 'The main elements of a marketing strategy are your target audiance goals and objectives and the tax you will employ to acitvely markter to your achive the goals',
  },
  {
    title: 'What is content marketing stratagy?',
    content: 'The main elements of a marketing strategy are your target audiance goals and objectives and the tax you will employ to acitvely markter to your achive the goals',
  },
  {
    title: 'What is the purpose of digital agency?',
    content: 'The main elements of a marketing strategy are your target audiance goals and objectives and the tax you will employ to acitvely markter to your achive the goals',
  }, ,
  {
    title: 'Can I success on this platform with my experience?',
    content: 'The main elements of a marketing strategy are your target audiance goals and objectives and the tax you will employ to acitvely markter to your achive the goals',
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

  };
  return (
    <>
      <section className="faq-section fix">
        <div className="container">
          <div className="faq-wrapper">

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="faq-image bg-cover !ml-[-20.7rem]"
                  style={{ backgroundImage: 'url("./src/assets/img/faq/faq.webp")' }}
                />
              </div>
              <div className="col-lg-6 mt-3 mt-lg-0">
                <div className="faq-content">
                  <div className="section-title">
                    <span
                      className="wow fadeInUp fontsts"
                      style={{ visibility: "visible", animationName: "fadeInUp" }}
                    >
                      What people ask
                    </span>
                    <h2
                      className="wow fadeInUp text-[35px]"
                      data-wow-delay=".3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      Get every single answer <br /> from here
                    </h2>
                  </div>
                  <div className=" rounded-md overflow-hidden">
                    {items.map((item, index) => (
                      <div key={index} className="border-b">
                        <div
                          className="flex justify-between items-center p-2 cursor-pointer  hover:bg-gray-300"
                          onClick={() => toggleItem(index)}
                        >
                          <h2 className="font-normal text-[16px]" style={{ color: activeIndex == index ? "blue" : "black" }}>{item.title}</h2>
                          <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        <div
                          className={`overflow-hidden transition-all ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                          style={{
                            height: activeIndex === index ? `100px` : '0px',
                            transition: "1s",
                            opacity: activeIndex == index ? "1" : "0",
                          }}
                        >
                          <div className="p-2 bg-white">
                            <p>{item.content}</p>
                          </div>
                        </div>
                        {/* <div className="p-4 bg-white duration-200 "
                          style={{
                            display: activeIndex == index ? "block" : "none"
                          }}
                        >
                          <p>{item.content}</p>
                        </div> */}
                        {/* {activeIndex === index && <div className="p-4 bg-white">{item.content}</div>} */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

    </>
  )
}

export default FaqSection