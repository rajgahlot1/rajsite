import { Link } from "react-router-dom";
const Header = () => {
    return (<>
    <div  style={{backgroundColor:"#D6EDFF"}}>
       <div className="container border-bottom">
<div className="row py-2 d-block d-md-flex  ">
<div className="col-md-4 mx-2 col-6 text-danger border border-danger rounded-3"><h1>Raj Gahlot</h1></div>
<div className="col row position-relative top-0 right-0">
<div className="col my-md-2  my-3 linkData collapse d-md-block "><Link className="p-1 text-decoration-none btn btn-outline-primary rounded-pill" to="/">Home</Link></div>
<div className="col  my-md-2 my-3 linkData collapse d-md-block "><Link  className="p-1 text-decoration-none btn btn-outline-primary rounded-pill" to="/about">About</Link></div>
<div className="col  my-md-2 my-3 linkData collapse d-md-block "><Link  className="p-1 text-decoration-none btn btn-outline-primary rounded-pill" to="/service">Service</Link></div>
<div className="col  my-md-2 my-3 linkData collapse d-md-block "><Link  className="p-1 btn btn-outline-primary rounded-pill text-decoration-none" to="/contact">Contact</Link></div>
</div>
</div>
<div className="fw-bold fs-3 rotate-270 btn col position-absolute top-0 end-0 mx-3 my-2 d-block d-md-none btn-primar text-end" aria-expanded="false" data-bs-target=".linkData" data-bs-toggle="collapse">!!!</div>
</div> </div>
        </>
    )
}
export default Header;