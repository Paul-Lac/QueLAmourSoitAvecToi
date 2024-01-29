import "../App.css";
import "./Char.css";

function Char({ char }) {
  return (
    <div className="profile container">
      <img src={char.imageSRC} alt={char.name} />
      <p>{char.name}</p>
    </div>
  );
}

export default Char;
