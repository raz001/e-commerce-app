import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function Allroutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}
export default Allroutes;