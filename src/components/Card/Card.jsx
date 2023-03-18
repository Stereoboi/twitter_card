import {
  CardWrapper,
  CardInfoWrapper,
  Button,
  Text,
  TextFollowers,
  ImageContainer,
  Rectangle1,
  Rectangle2,
  Ellipse,
  ImageBoy,
} from "./Card.styled";
import boy from "../../media/images/Hansel1x.png";

export const Card = () => {
  return (
    <CardWrapper>
      <ImageContainer>
        <ImageBoy src={boy} />
        <Rectangle1 />
        <Rectangle2 />
        <Ellipse />
      </ImageContainer>
      <CardInfoWrapper>
        <Text>777 TWEETS</Text>
        <TextFollowers>100,500 FOLLOWERS</TextFollowers>
        <Button>FOLLOW</Button>
      </CardInfoWrapper>
    </CardWrapper>
  );
};
