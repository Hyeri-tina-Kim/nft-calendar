import { Card, Image, Label } from "semantic-ui-react";

const ItemCard = () => {
  return (
    <div style={{ padding: 8 }}>
      <Card>
        <Image src="https://via.placeholder.com/300x150" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Project Title</Card.Header>
          <Card.Meta>
            <span className="date">2022-03-13</span>
          </Card.Meta>
          <Card.Description>
            Project Description Project Description Project Description
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label as="a" color="red" tag>
            Upcoming
          </Label>
          <Label as="a" color="teal" tag>
            Featured
          </Label>
          <Label as='a' tag>
      New
    </Label>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemCard;
