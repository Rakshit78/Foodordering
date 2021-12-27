import "./Main.css";

import { useState } from "react";
const arr = [
  {
    id: 9,
    name: "Chapati and dal",
    category: "dinner",
    season: "spring",
    sweet: true,
    check: true,
    price: "₹1000",
    image:
      "https://thespicelounge.co.uk/wp-content/uploads/2016/09/indian-cooking-class-dal-and-chapati.jpg"
  },
  {
    id: 0,
    name: "Biryani",
    category: "lunch",
    season: "summer",
    sweet: true,
    check: true,
    price: "₹8900",
    image:
      "https://th.bing.com/th/id/OIP.fpZH5oPD42wphiwsJBaHFQHaFC?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: 1,
    name: "Eggs",
    category: "breakfast",
    season: "winter",
    sweet: true,
    check: true,
    price: "₹900",
    image:
      "https://th.bing.com/th/id/OIP.YwGXXXPp3S0Z3cLfyNxzDgHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: 2,
    name: "Pinni",
    category: "dinner",
    season: "spring",
    sweet: true,
    check: true,
    price: "₹600",
    image:
      "https://th.bing.com/th/id/OIP.ItxOTgJwRAOV69bo2VNSvgHaEH?w=304&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: 3,
    name: "Chapati and dal",
    category: "dinner",
    season: "spring",
    sweet: true,
    check: true,
    price: "₹1000",
    image:
      "https://thespicelounge.co.uk/wp-content/uploads/2016/09/indian-cooking-class-dal-and-chapati.jpg"
  },
  {
    id: 4,
    name: "Rice",
    category: "lunch",
    season: "spring",
    sweet: true,
    check: true,
    price: "₹90000",
    image:
      "https://th.bing.com/th/id/OIP.kwbE8ZdteZIDmq6oqAUlCgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: 5,
    name: "Biryani",
    category: "lunch",
    season: "summer",
    sweet: true,
    check: true,
    price: "₹8900",
    image:
      "https://th.bing.com/th/id/OIP.fpZH5oPD42wphiwsJBaHFQHaFC?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: 6,
    name: "Gulab Jamun",
    category: "breakfast",
    season: "summer",
    sweet: true,
    check: true,
    price: "₹5500",
    image:
      "https://th.bing.com/th/id/OIP.povaUd1_FMyb0x0mjclU8gHaHY?w=183&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: 7,
    name: "Mango Shake",
    category: "breakfast",
    season: "summer",
    sweet: true,
    check: true,
    price: "₹7600",
    image:
      "https://th.bing.com/th/id/OIP.povaUd1_FMyb0x0mjclU8gHaHY?w=183&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  }
];

export default function Main() {
  const [data, setdata] = useState(arr);
  const [check, setcheck] = useState(false);

  const handle = (hello) => {
    const arrnew = data.filter((elem) => {
      setcheck(!check);
      if (
        elem.category === hello ||
        elem.season === hello ||
        elem.name === hello
      ) {
        return elem;
      }
    });
    if (!check) {
      setdata(arrnew);
      console.log(check);
      return data;
    } else {
      setdata(arr);
      return data;
    }
  };

  return (
    <div className="Main">
      <div class="one">
        <div className="cook">
          <h1>By Season: </h1>
          <label htmlFor="checks">
            <input type="checkbox" onChange={() => handle("breakfast")} />{" "}
            BreakFast
          </label>
          <label htmlFor="checks">
            <input type="checkbox" onChange={() => handle("lunch")} /> Lunch
          </label>
          <label htmlFor="checks">
            <input type="checkbox" onChange={() => handle("dinner")} /> Dinner
          </label>
        </div>
        <div className="cook">
          <h1>By Season: </h1>
          <label htmlFor="checks">
            <input type="checkbox" onChange={() => handle("winter")} /> Winter
          </label>
          <label htmlFor="checks">
            <input type="checkbox" onChange={() => handle("summer")} /> Summer
          </label>
          <label htmlFor="checks">
            <input type="checkbox" onChange={() => handle("spring")} /> Spring
          </label>
        </div>
        <div className="cook">
          <h1>By Sweet: </h1>
          <label htmlFor="checks">
            <input type="checkbox" onChange={() => handle("Gulab Jamun")} />{" "}
            Gulab Jamun
          </label>
          <label htmlFor="checks">
            {" "}
            <input type="checkbox" onChange={() => handle("Mango Shake")} />
            Mango Shake
          </label>
        </div>
      </div>
      <div className="two">
        {data.map((elem) => {
          return (
            <>
              <div className="card">
                <img
                  src={elem.image}
                  alt="imagr"
                  width="250px"
                  height="250px"
                />

                <div className="a">
                  <i className="fa fa-thumbs-o-up" />
                  Like
                  <i className="fa fa-clock-o" />
                  Clock
                </div>
                <h4>{elem.name}</h4>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
