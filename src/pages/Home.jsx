import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import AppsIcon from '@mui/icons-material/Apps';
import Avator from '@mui/material/Avatar/Avatar';
import Search from './Search';


function Home() {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className='home_headerRight'>
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avator />
                </div>
            </div>
            <div className='home_body'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
                <div className='home_inputContainer'>
                    <Search hideButtons />


                <div className='home_search'>
                    {/* <Search hideButtons/> */}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home