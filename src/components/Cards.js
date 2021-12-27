xport default function Cards({ data, setdata }) {
  return (
    <>
      {data.map((elem) => {
        return (
          <div className="card">
            <img
              src={elem.check ? elem.image : null}
              alt="image"
              width="300px"
              height="150px"
            />
            <div className="like">
              <p>
                <i class="fa fa-thumbs-o-up" /> Likes
              </p>
              <p>
                <i class="fa fa-clock-o" /> 30 mins
              </p>
            </div>
            <p>{elem.check ? elem.price : null}</p>
            <h3>{elem.check ? elem.name : null}</h3>
          </div>
        );
      })}
    </>
  );
}
