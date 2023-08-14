import React from "react";
import './InfoTooltip.css';
import success from "../../images/success.svg";
import error from "../../images/error.svg";

function InfoTooltip(props) {
  const popupIsOpened = `${props.isOpen ? 'popup_is-opened' : ''}`;

  return (
    <section className={`popup ${popupIsOpened}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <img
          className="popup__image"
          alt=''
          src={props.isSuccess ? success : error}
        />
        <h2 className="popup__text">
          {props.isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
