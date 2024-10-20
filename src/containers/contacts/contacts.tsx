import React from "react";
import "../../style.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Контакты</h1>
      <p>Если у вас есть вопросы, вы можете связаться с нашими менеджерами:</p>
      <div className="manager">
        <h4>Максим Иванов</h4>
        <p>Email: ivanov@fantasy.com</p>
        <p>Телефон: +996 (779) 56-78-90</p>
      </div>
      <div className="manager">
        <h4>Айжамал Халилова</h4>
        <p>Email: halilova@fantasy.com</p>
        <p>Телефон: +996 (779) 65-43-21</p>
      </div>
      <div className="manager">
        <h4>Тимур Федоров</h4>
        <p>Email: fedorov@fantasy.com</p>
        <p>Телефон: +996 (779) 54-98-76</p>
      </div>
    </div>
  );
};

export default Contact;
