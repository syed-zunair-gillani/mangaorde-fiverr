import Link from "next/link";
import React from "react";

const LeftNav = () => {
  return (
    <>
      <div id="left_nav">
        <div className="nav-elements">
          <div className="ne-menu">
            <div className="item">
              <a className="item-link" href="/">
                <div className="base-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M7.5 17.5V11.3333C7.5 10.8666 7.5 10.6333 7.59083 10.455C7.67072 10.2982 7.79821 10.1707 7.95501 10.0908C8.13327 10 8.36662 10 8.83333 10H11.1667C11.6334 10 11.8667 10 12.045 10.0908C12.2018 10.1707 12.3293 10.2982 12.4092 10.455C12.5 10.6333 12.5 10.8666 12.5 11.3333V17.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2.5 8.80421C2.5 8.32558 2.5 8.08627 2.56169 7.86588C2.61633 7.67065 2.70614 7.48704 2.82669 7.32405C2.96278 7.14005 3.15168 6.99312 3.52949 6.69927L9.18141 2.30333C9.47418 2.07562 9.62057 1.96177 9.78221 1.918C9.92484 1.87938 10.0752 1.87938 10.2178 1.918C10.3794 1.96177 10.5258 2.07562 10.8186 2.30333L16.4705 6.69927C16.8483 6.99312 17.0372 7.14005 17.1733 7.32405C17.2939 7.48704 17.3837 7.67065 17.4383 7.86588C17.5 8.08627 17.5 8.32558 17.5 8.80421V14.8333C17.5 15.7667 17.5 16.2335 17.3183 16.59C17.1586 16.9036 16.9036 17.1585 16.59 17.3183C16.2335 17.5 15.7668 17.5 14.8333 17.5H5.16667C4.23325 17.5 3.76654 17.5 3.41002 17.3183C3.09641 17.1585 2.84144 16.9036 2.68166 16.59C2.5 16.2335 2.5 15.7667 2.5 14.8333V8.80421Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="name">Home</span>
              </a>
            </div>

            <div className="item">
              <a className="item-link" href="contact-us">
                <div className="base-icon">
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="_x32_5_attachment"></g> <g id="_x32_4_office"></g>{" "}
                      <g id="_x32_3_pin"></g> <g id="_x32_2_business_card"></g>{" "}
                      <g id="_x32_1_form"></g> <g id="_x32_0_headset"></g>{" "}
                      <g id="_x31_9_video_call"></g>{" "}
                      <g id="_x31_8_letter_box"></g>{" "}
                      <g id="_x31_7_papperplane">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            <path d="M62.9891,2.5618c-0.0765-0.5779-0.6611-0.9805-1.2299-0.8401L7.4043,15.2065c-0.3535,0.0879-0.6318,0.3608-0.7256,0.7129 s0.0112,0.7275,0.2744,0.9795l13.9343,13.3583l-2.7649,17.1495c-0.1079,0.6712,0.4969,1.2576,1.1582,1.1445l18.0805-3.1324 l17.1832,9.6988c0.1523,0.0859,0.3218,0.1289,0.4917,0.1289c0.1523,0,0.3047-0.0347,0.4453-0.1045 c0.2969-0.1475,0.5015-0.4331,0.5459-0.7617l6.9639-51.5542C63.0031,2.7372,63.0007,2.6487,62.9891,2.5618z M9.647,16.7109 L56.8914,4.9902L22.2545,28.7978L9.647,16.7109z M36.9146,43.4663l-16.5942,2.875l2.4995-15.5054L58.8633,6.0615L36.9146,43.4663 z M54.2427,52.6504l-15.3231-8.6492l21.4231-36.509L54.2427,52.6504z"></path>
                            <path d="M14.4438,51.6099l-4.6948,5.209c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573 c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6948-5.209c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121 C15.4463,51.1675,14.8135,51.2002,14.4438,51.6099z"></path>
                            <path d="M5.9478,29.0562l-4.6909,5.2085c-0.3696,0.4106-0.3364,1.043,0.0742,1.4126c0.1909,0.1719,0.4302,0.2568,0.6685,0.2568 c0.2739,0,0.5459-0.1113,0.7437-0.3311l4.6909-5.2085c0.3696-0.4106,0.3364-1.043-0.0742-1.4126 C6.9487,28.6128,6.3179,28.6455,5.9478,29.0562z"></path>{" "}
                            <path d="M40.8164,55.4331l-4.6909,5.2051c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573 c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6909-5.2051c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121 C41.8188,54.9907,41.186,55.0234,40.8164,55.4331z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g id="_x31_6_laptop"></g> <g id="_x31_5_connection"></g>{" "}
                      <g id="_x31_4_phonebook"></g>{" "}
                      <g id="_x31_3_classic_telephone"></g>{" "}
                      <g id="_x31_2_sending_mail"></g>{" "}
                      <g id="_x31_1_man_talking"></g> <g id="_x31_0_date"></g>{" "}
                      <g id="_x30_9_review"></g> <g id="_x30_8_email"></g>{" "}
                      <g id="_x30_7_information"></g>{" "}
                      <g id="_x30_6_phone_talking"></g>{" "}
                      <g id="_x30_5_women_talking"></g>{" "}
                      <g id="_x30_4_calling"></g> <g id="_x30_3_women"></g>{" "}
                      <g id="_x30_2_writing"></g> <g id="_x30_1_chatting"></g>{" "}
                    </g>
                  </svg>
                </div>
                <span className="name">Contact</span>
              </a>
            </div>

            <div className="item">
              <a className="item-link" href="terms.html">
                <div className="base-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M8 12H9M16 12H12"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M16 8H15M12 8H8"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M8 16H13"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="name">Terms of services</span>
              </a>
            </div>
          </div>

          <div className="ne-links">
            <a
              title="Term of service"
              className="left-nav-terms font-family"
              href="/terms.html"
            >
              Terms of services
            </a>

            <span>~</span>

            <a
              title="Contact"
              className="left-nav-terms font-family"
              href="/Contact.html"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
