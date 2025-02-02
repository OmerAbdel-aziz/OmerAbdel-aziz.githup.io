import React from "react";
import logo from "../../../public/assets/images/GCST.png";

const Footer = () => {
  return (
    <footer
      className="footer bg-[#1E1E1E] text-white p-10 relative top-[555px] text-end"
      lang="ar"
    >
      <nav className="place-self-end">
        <h6 className="footer-title text-start place-self-end">مراكز الكلية</h6>
        <a className="link link-hover text-end  place-self-end">
          مركز أم قصي للمرأة و الطفل
        </a>
        <a className="link link-hover text-end place-self-end">
          مركز المخزون المعرفي
        </a>
        <a className="link link-hover text-end place-self-end">
          المكتبة و المعامل
        </a>
      </nav>
      <nav className="place-self-end">
        <h6 className="footer-title  text-end place-self-end">شؤون الطلاب</h6>
        <a className="link link-hover text-end place-self-end">
          القبول و التسجيل
        </a>
        <a className="link link-hover text-end place-self-end">أقسام الكلية</a>
        <a className="link link-hover text-end place-self-end">
          الارشاد الأكاديمي
        </a>
      </nav>

      <nav className="place-self-end">
        <h6 className="footer-title text-end place-self-end ">الرئيسية</h6>
        <a className="link link-hover text-end place-self-end">عن الكلية</a>
        <a className="link link-hover text-end place-self-end">الاتصال ينا</a>
        <a className="link link-hover text-end place-self-end">الاخبار</a>
      </nav>

      <aside className="place-self-end">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-end">
          <p>
            كلية غبيش للعلوم و التقنية
            <br />
            رواد في مجال التعليم العالي منذ عام 1992
            <br />
            <span>
              <a href="/admin/login">Admin</a>{" "}
            </span>
          </p>
          <img src={logo} alt="" className="w-20 h-20 " />
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
