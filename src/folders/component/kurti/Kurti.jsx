import React from "react";
import "../../styles/kurti.scss";
import { useSelector, useDispatch } from "react-redux";
import { Add_wishList } from "../../redux/wishlistSlice";
const Kurti = () => {
  const data = useSelector((state) => state.api.data);
  const dispatch = useDispatch();
  return (
    <div className="kurti">

      <div className="kurti_item_one">
        {/* filter */}

        <div className="kurti_filter_one">
          <p className="filter_color">red</p>
          <p className="filter_color">blue</p>
          <p className="filter_color">while</p>
          <p className="filter_color">black</p>
          <p className="filter_color">gray</p>
          <p className="filter_color">pink</p>
          <p className="filter_color">yellow</p>
          <p className="filter_color">green</p>
          <p className="filter_color">light</p>
          <p className="filter_color">sky</p>
        </div>

        <div className="kurti_filter_two">
          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

          <p>
            <input type="checkbox" />
          </p>

         
         
        </div>
      </div>

      <div className="kurti_item_two">

        {data.map(item=>
<>
          <div key={item.id}>
          <img src={item.image} alt="" />
          <h6>{item.title}</h6>
          <h2>{item.price}</h2>
          <div className="button">
            <button onClick={()=>dispatch( Add_wishList (item))}>Add</button>
            <button>buy</button>
          </div> 
        </div>

</>
) }

      </div>
    </div>
  );
};

export default Kurti;
