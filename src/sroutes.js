import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './pages/home';

class SRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        );
    }
}

export default SRoutes;

//<Route path="/" element={<Home />} />