import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MicIcon from "@mui/icons-material/MicOutlined";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

function Search({ hideButtons = false }) {
  const [, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("you hit", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon onClick={search} className="searchIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_btn">
          <button type="submit" onClick={search}>
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search_btnHidden">
          <button type="submit" onClick={search}>
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
