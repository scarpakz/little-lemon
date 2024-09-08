import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Booking from '../pages/Booking';
import Testimonials from '../pages/Testimonials';
import About from '../pages/About';
function Main () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    )
}
export default Main;