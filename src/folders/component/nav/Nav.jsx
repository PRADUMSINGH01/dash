import React, { useState } from "react";
import "../../styles/nav.scss";
import { Link } from "react-router-dom";

// img import

import search_img from "../../asset/search_FILL0_wght400_GRAD0_opsz48 (1).svg";
import Profile_img from "../../asset/person_FILL0_wght400_GRAD0_opsz48.svg";
import shop_img from "../../asset/shopping_cart_checkout_FILL0_wght400_GRAD0_opsz48.svg";
import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";


const Nav = () => {
  const [searchdata, setsearchdata] = useState("");
  const dispatch = useDispatch();
  
  const data  = useSelector((state)=>state.wishlistreduces.data)

  return (
    <div className="nav">
      <div className="navbar_item_one">
        {/* logo */}
        <img src="" alt="logo" />
      </div>
      <div className="navbar_item_two">
        <Link className="lnk"  onClick={() => dispatch({type:"USER_FETCH_REQUESTED"})} to={"/kurti"}>
          kurti
        </Link>
        <Link className="lnk" to={"/kurti"}>
          child
        </Link>
        <Link className="lnk" to={"/kurti"}>
          bag
        </Link>
        <li>
          <input
            type="text"
            value={searchdata}
            onChange={(e) => setsearchdata(e.target.value)}
            placeholder="search any things "
          />
        </li>
        <li>
          <img src={search_img} alt="search" />
        </li>
      </div>

      <div className="navbar_item_three">
        <Link to={"/wishlist"}>
          <img src={shop_img} alt="icon" />{" "}
          {data.length} 
        </Link>
      </div>

      <div className="navbar_item_four">
        <Link to={"/profile"}>
          <img src={Profile_img} alt="icon" />
        </Link>
      </div>

      {/* <button >click</button> */}

    </div>
  );
};

export default memo(Nav);
