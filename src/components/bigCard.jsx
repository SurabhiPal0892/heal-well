import { Card, Button } from "react-bootstrap";

export function BigCardComponent({ data }) {
  return (
    <div className="bigcard__container">
      {data.map((t) => {
        return (
          <Card key={t.id} style={{width:"35rem"}} className="big-card">
            <Card.Img src={t.imgUrl} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{t.title}</Card.Title>
              <Card.Text>
              {t.description}
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="outline-primary" className="btn__know-more">Know more</Button>

            </Card.ImgOverlay>
          </Card>
        );
      })}
    </div>


  );
}
