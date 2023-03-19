import { useState, useEffect } from "react";

import {
  CardWrapper,
  CardInfoWrapper,
  Button,
  Text,
  TextFollowers,
  ImageContainer,
  Rectangle1,
  ButtonUnFollow,
  Ellipse,
  ImageBoy,
} from "./Card.styled";

export const Card = ({ tweets, followers, increaseFollowers }) => {
  const [followed, setFollowed] = useState(
    localStorage.getItem("FOLLOWED") === "true" ? true : false
  );

  const formattedNumber = followers.toString().split("");
  formattedNumber.splice(3, 0, ",");
  const result = formattedNumber.join("");

  useEffect(() => {
    localStorage.setItem("FOLLOWED", followed);
  }, [followed]);

  const handleClickFollow = () => {
    increaseFollowers(Number(followers) + 1);
    setFollowed(true);
  };

  const handleClickUnFollow = () => {
    increaseFollowers(Number(followers) - 1);
    setFollowed(false);
  };

  return (
    <CardWrapper>
      <ImageContainer>
        <ImageBoy />
        <Rectangle1 />
        <Ellipse />
      </ImageContainer>
      <CardInfoWrapper>
        <Text>{tweets} TWEETS</Text>
        <TextFollowers>{result} FOLLOWERS</TextFollowers>
        {!followed ? (
          <Button type="button" onClick={handleClickFollow}>
            FOLLOW
          </Button>
        ) : (
          <ButtonUnFollow type="button" onClick={handleClickUnFollow}>
            FOLLOWING
          </ButtonUnFollow>
        )}
      </CardInfoWrapper>
    </CardWrapper>
  );
};
