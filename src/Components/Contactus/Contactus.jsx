import React, { useRef, useState } from "react";
import "../Contactus/Contactus.css";
import PagesHeader from "../Header/PagesHeader";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer.jsx";
const Contactus = () => {
  const [alertmsg, setAlertmsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m3g8fwi", "template_1wy9jpq", form.current, {
        publicKey: "daYCIg_Fj27FURM5e",
      })
      .then(
        () => {},
        (error) => {
          setEmail("");
          setMessage("");
          setName("");
          alert("حدث خطأ ما الرجاء المحاولة مرة أخري");
        }
      );
    setEmail("");
    setMessage("");
    setName("");
    setAlertmsg(!alertmsg);
  };
  return (
    <>
      <PagesHeader />
      <section className="ContacotUS">
        <div className="title">
          <div className="text-center contact-title">
            <h5 className="">
              {" "}
              ( يسعدنا كثيرا أن تترك لنا رسالة تحتوي علي اقتراحك او رأيك حتي
              نقوم بالتحسين و التطوير دائما . جعله الله ف ميزان حسناتك .){" "}
            </h5>
          </div>
          <div className="quran-title mb-4 contact-title">
            <h3 className="mt-3 mb-3 text-center">
              {" "}
              تــــــــــواصــــــــــل مـــــعـــــانــــــــــا{" "}
            </h3>
            <div className="line-1 "></div>
            <div className="line-2 "></div>
          </div>
        </div>
        <div className="contact">
          <div className="container text-center ">
            <div className="form">
              <form ref={form} onSubmit={sendEmail}>
                {alertmsg && (
                  <div class="alert alert-primary " role="alert">
                    شكرا لك علي تواصلك معانا . سوف نقوم بالرد عليك لاحقا .
                    <i
                      class="fa-solid fa-circle-xmark"
                      onClick={() => {
                        setAlertmsg(!alertmsg);
                      }}
                    ></i>
                  </div>
                )}
                <div className="filed">
                  <input
                    type="text"
                    name="user_name"
                    value={name}
                    placeholder=" الأســـــم"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="filed mb-4">
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    placeholder=" البـــــريـــــد الإلـــكـــــتـــــرونـــــي "
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="filed">
                  <textarea
                    className="message"
                    name="message"
                    placeholder=" رســــــــــالــــتك"
                    value={message}
                    rows={6}
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="d-button text-white px-4 py-1 my-2 contact-button"
                >
                  إرســــــــال
                </button>
              </form>
            </div>
            <div className="contactME">
              <div className="mylocation">
                <i class="fa-solid fa-location-dot"></i>
                <span>مـــصـــر-القـــــاهـــــرة</span>
              </div>
              <div className="myEmail">
                <a className="fw-bold" href="mailto:badr59497@gmail.com">
                  مــحــمــد بــدر اســمــاعــيــل{" "}
                </a>
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
