import React from "react";
import "../../style.css";

const Home: React.FC = () => {
  return (
    <div className="info-container">
      <div className="banner">
        <img
          src="https://cdn2.steamgriddb.com/grid/4d289c150fc83d36f5158512246e3bfe.png"
          alt="banner"
        />
      </div>

      <h1>О нашей компании</h1>
      <p>
        Стремясь соответствовать высоким мировым стандартам сервиса и
        предвосхищать желания клиента, мы стараемся сохранить позицию ведущего
        выставочного оператора Кыргызской Республики
      </p>
      <p>
        С момента основания в 2009 году мы выросли в стабильную компанию,
        предлагающую широкий спектр услуг, включая веб-разработку, мобильные
        приложения и консалтинг.
      </p>
      <p>
        Наша команда состоит из высококвалифицированных специалистов, готовых
        взять на себя любые вызовы и превратить ваши идеи в реальность.
      </p>
      <div className="stands">
        <div className="stand">
          <img
            className="img-stand"
            src="https://signfix.ng/wp-content/uploads/2023/09/Exhibition-Booth-1.webp"
            alt="image"
          />
        </div>
        <div className="stand">
          <img
            className="img-stand"
            src="https://alfi.parts/ckeditor_assets/pictures/79/content_5d78b30d-2d0f-4fdf-af9b-88881daed9ee.jfif"
            alt="image"
          />
        </div>
        <div className="stand">
          <img
            className="img-stand"
            src="https://www.beyman.net/site/wp-content/uploads/2021/08/Exhibition-Stand-Booth-Design-4-1170x658.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
