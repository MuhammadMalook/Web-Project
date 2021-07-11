import React, {useEffect,useState} from "react"
import data from './cars.js'
import { Card, CardColumns, Container, Row, Col } from "react-bootstrap"
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";



const SpareParts = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const [details,setDetails] = useState([])
    const history = useHistory();

    const register = () => {
        history.push('BuySpare_1',details)
    }
    const del = (id)=>{
        fetch(`/delspare/${id}`, {
            method: "delete",
            
          })
            .then((res) => res.json())
            .then((result) => console.log(result));
            window.location.reload()
    }
useEffect(  ()=>
{   
    fetch('/spare').then(data=> data.json()).then(results=> setDetails(results.result))
},[])




    return (<>
          
            <div className="row ml-5">
                {details.map(itm => {
                    return (
                        <div className="col-sm-4 mt-4 ">
                                <Card style={{ width: '30rem' }}>
                                    <Card.Img variant="top" src={itm.photo} width={418} height={255}/>
                                    <Card.Body>
                                        <Card.Title>Car Name: {itm.name}</Card.Title>
                                        <Card.Title>Car Price: {itm.price}</Card.Title>
                                        {user? (<Button variant="contained" color="primary" onClick={()=> del(itm._id)}>Delete</Button>): <Button variant="contained" color="primary" onClick={register}>Buy</Button>}  
                                    </Card.Body>
                                </Card>
                            
                        </div>
                    )
                })}

            </div>
      



    </>


    )
}
export default SpareParts