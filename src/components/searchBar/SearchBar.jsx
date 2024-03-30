import { useState } from "react";
import SearchImg from "../../assets/search.png";
import "./SearchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    })

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };
    
    return (
      <div className='searchBar'>
        <div className='type'>
          {types.map((type) => (
            <button key={type} 
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}>
                {type}
            </button>
          ))}
        </div>
        <form>
          <input type='text' name='location' placeholder='City Location' />
          <input
            type='number'
            name='minPrice'
            min={0}
            max={100000000}
            placeholder='Min Price'
          />
          <input
            type='number'
            name='maxPrice'
            min={0}
            max={100000000}
            placeholder='Max Price'
          />
          <button>
            <img src={SearchImg} alt='Search Bar Image' />
          </button>
        </form>
      </div>
    );
}

export default SearchBar;