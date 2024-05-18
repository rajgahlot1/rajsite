import { Link } from 'react-router-dom';
import car from '../website_images/car.svg'
const About=()=>{
    return(
        <><div className='height-100' style={{backgroundColor:"#A0D4FF"}}>
        <div className="row" >
            <div className="col row d-flex align-content-center justify-content-center">
                <div className='text-center' style={{height:'auto'}}>
<h2>Welcome to About Page <h1 className="fs-1">Raj Gahlot</h1></h2>
<h2 className=" col fw-medium btn btn-outline-dark "><Link to='/contact' className='text-decoration-none'>Contact Us</Link></h2>
</div>
            </div>
            <div className="col">
<img src={car} alt="" className='car img-responsive img-fluid' style={{height:'400px'}} />
            </div>
        </div></div>
        </>
    )
}
export default About;