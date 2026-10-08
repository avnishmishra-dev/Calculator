import style from "./Buttons.module.css";

function Buttons({ elements, handleButtonClick }) {
  return (
    <div className={style["btn-container"]}>
      {elements.map((element, index) => (
        <button key={index} className={style["calc-btn"]} onClick={() => handleButtonClick(element)}>
          {element}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
