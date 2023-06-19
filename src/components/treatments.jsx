import { Card } from "react-bootstrap";
import {TREATMENTS} from "./data"
export function Treatments(){
    const data=TREATMENTS;
    return(
        <div className="card__container">
        {
            data.map(t=>{
                return(
                
                <Card style={{ width: '15rem' }} key={t.id} className="small-card">
                <Card.Body>
                  <Card.Title>{t.title}</Card.Title>
                  <Card.Text>
                    {t.description}
                  </Card.Text>
                  {/* <Button variant="outline-primary" className="btn__know-more">Know more</Button> */}
                </Card.Body>
              </Card> 
              )
            })
        }
           </div>
    )
}

