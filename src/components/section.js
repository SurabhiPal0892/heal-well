import { Card,Button } from "react-bootstrap";
import {TREATMENTS} from "./data"
export function Section(){
    const data=TREATMENTS;
    return(
        <div className="card__container">
        {
            data.map(t=>{
                return(
                
                <Card style={{ width: '18rem' }} key={data.id}>
                <Card.Body>
                  <Card.Title>{t.title}</Card.Title>
                  <Card.Text>
                    {t.description}
                  </Card.Text>
                  <Button variant="primary">Know more</Button>
                </Card.Body>
              </Card> 
              )
            })
        }
           </div>
    )
}

