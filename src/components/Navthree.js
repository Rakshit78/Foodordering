import "./Navthree.css";
export default function Navthree() {
  return (
    <>
      <div className="Main_Block">
        <div className="Navthree_1">
          <a>Home</a>
          <a>Categories</a>
          <a>Recipes</a>
          <a>Contact</a>
          <a>About</a>
        </div>
        <div className="Navthree_2">
          <a href="#" class="fa fa-facebook N3icon"></a>
          <a href="#" class="fa fa-twitter N3icon"></a>
          <a href="#" class="fa fa-google N3icon"></a>
          <a href="#" class="fa fa-linkedin N3icon"></a>
          <a href="#" class="fa fa-youtube N3icon"></a>
        </div>
      </div>
      <hr class="row" />
    </>
  );
}
