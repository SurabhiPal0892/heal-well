import { Card,Button } from "react-bootstrap";
export function CardComponent({data}){
    return(
        <div className="card__container">
        {
            data.map(t=>{
                return(
                <Card style={{ width: '30rem' }} bg="info" text="white" key={data.id}>
                <Card.Body>
                  <Card.Title>{t.title}</Card.Title>
                  <Card.Text>
                    {t.description}
                  </Card.Text>
                  {/* <Button variant="primary">Know more</Button> */}
                </Card.Body>
              </Card> 
              )
            })
        }
           </div>
    )
}

