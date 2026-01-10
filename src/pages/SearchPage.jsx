import { Search } from "@mui/icons-material";
import React from "react";
import { useStateValue } from "../StateProvider";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    
    return (
        <div className="SearchPage">
            <div className="searchPage_header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage_result">
            </div>
        </div>
    )
}
export default SearchPage;