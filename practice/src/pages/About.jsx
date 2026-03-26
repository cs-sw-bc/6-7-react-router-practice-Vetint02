import { useState, useEffect } from "react";

export default function About(){
    return (
        <div style={{lineHeight: '1.6', padding: '10%'}}>
            <p>This page uses api that redirects to home, build, about, and country.</p>
            <br/>
            <p>User can utilize this api by interacting with website such as clicking on the flags of countries, or simply by selecting one of the tabs from the navbar</p>
        </div>
    )
}