import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import NearYou from './pages/nearyou';
import Suppliers from './pages/suppliers';

class SRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                <Route path="/nearyou" element={<NearYou />} />
                <Route path="/suppliers" element={<Suppliers />} />

            </Routes>
        );
    }
}

export default SRoutes;

//<Route path="/" element={<Home />} />