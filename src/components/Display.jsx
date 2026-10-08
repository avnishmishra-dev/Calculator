import style from "./Display.module.css"

function Display({displayVal}) {
  return (
    <div id={style.display}>
      <input type="text" placeholder="0123456789" name="calc-display" value={displayVal} readOnly />
    </div>
  );
}

export default Display;
