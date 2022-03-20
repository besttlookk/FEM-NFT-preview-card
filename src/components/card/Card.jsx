import React from "react";
import image from "../../images/image-equilibrium.jpg";
import avatar from "../../images/image-avatar.png";
import { ReactComponent as Ether } from "../../images/icon-ethereum.svg";
import { ReactComponent as Clock } from "../../images/icon-clock.svg";

import { ReactComponent as View } from "../../images/icon-view.svg";
import {
  CardWrapper,
  CardImage,
  CardHeader,
  CardContent,
  CardText,
  CardInf0,
  CardInfoLeft,
  CardInfoRight,
  CardFooter,
  CardAvatar,
  CardCredit,
  CardImageHover,
} from "./CardStyles";

const Card = () => {
  return (
    <CardWrapper>
      <CardImage>
        <img alt="card" src={image} />
        <CardImageHover>
          <View />
        </CardImageHover>
      </CardImage>

      <CardContent>
        <CardHeader>Equilibrium #3429</CardHeader>
        <CardText>
          Our Equilibrium collection promotes balance and calm.
        </CardText>

        <CardInf0>
          <CardInfoLeft>
            <Ether />
            <span>0.041 ETH</span>
          </CardInfoLeft>

          <CardInfoRight>
            <Clock />
            <span>3 days left</span>
          </CardInfoRight>
        </CardInf0>
      </CardContent>

      <CardFooter>
        <CardAvatar>
          <img alt="avatar" src={avatar} />
        </CardAvatar>

        <CardCredit>
          Creation of <span>Jules Wyvern</span>
        </CardCredit>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
