import { Link } from 'react-router-dom';
import img1 from '../website_images/react.svg'
const Home = () => {
    return (
        <><div className='height-100' style={{backgroundColor:"#A0D4FF"}}>
          <div className='row'  >
<div className='col d-flex align-items-center justify-content-center flex-column'>
    <h2 className='fs-4 fs-md-1 px-5'>Grow your bussiness with <span className='text-primary'>Raj Gahlot</span></h2>
    <h4 className='fs-3 px-5'>We are team of talented developers making websites</h4>
<div className='btn  btn-outline-info border border-black fw-medium '><Link to="/about" className='text-decoration-none text-dark'>About Us</Link></div>
</div>


<div className="col py-5 d-flex align-items-center justify-content-center"><img src={img1} className="img-fluid img-style" alt="uiiu" /></div>

          </div></div>
        </>
    )
}
export default Home;
