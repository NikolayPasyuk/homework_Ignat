import React from 'react'
import Header from './Header'
import Rou from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Rou/>

            </HashRouter>
        </div>
    )
}

export default HW5
