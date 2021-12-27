import { Component } from "react";
import "./Navone.css";
export default function Navone() {
  return (
    <div className="Navone_block">
      <div class="Navone_1">
        <a href="#">Fourm</a>
        <a href="#">Catogory</a>
        <a href="#">Books</a>
        <a href="#">Recipe</a>
      </div>
      <div class="Navone_2">
        <a href="#">
          Login <i class="fa fa-address-book-o icon"></i>
        </a>
        <a href="#">Sign in</a>
      </div>
    </div>
  );
}
