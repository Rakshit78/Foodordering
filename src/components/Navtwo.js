import "./Navtow.css";
export default function Navtwo() {
  return (
    <>
      <div className="Main_block">
        <div className="Navtwo_1">
          <h3>EasyMeal</h3>
        </div>
        <div className="Navtwo_2">
          <select>
            <option>All Category</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="NavTwo_3">
          <a href="#">Favorites</a>
          <a href="#">Cart (0.00)</a>
        </div>
      </div>
      <hr className="row" />
    </>
  );
}
