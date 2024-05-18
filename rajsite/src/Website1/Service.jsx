import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Idata from './ImageData'
const Service=()=>{
    return(
       <>
       <div style={{backgroundColor:'#A0D4FF'}}>
       <h1 className="p-3 text-center">Our Services</h1>
       <div className='d-flex align-items-center justify-content-center flex-wrap'>
        {
          Idata.map((val,ind)=>{
          return  <BasicExample Src={val.imgsrc} title={val.title} content={val.content}/>
          })
        }
       </div>
       </div></>
    )
}
export default Service;


 
function BasicExample(props) {
  return (
    <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.Src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='fw-lighter'>
         {props.content}
         </Card.Text>
        <Button variant="primary"><a target="_self" rel="noopener noreferrer"  href={`https://en.wikipedia.org/wiki/${props.title}`} >Go somewhere</a></Button>
      </Card.Body>
    </Card>
  );
}

