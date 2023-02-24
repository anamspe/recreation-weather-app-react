import React from "react";

export default function Search() {
  return (
    <div>
      <form>
        <input type="search" placeholder="Search City" />
        <input type="submit" value="Search" />
        <i className="fa-solid fa-house home-icon ps-5" />
      </form>
    </div>
  );
}
