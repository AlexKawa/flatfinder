import React from "react";
import styled from "styled-components";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { toggleFavorite } from "store/appSlice";
import { formatPrice } from "utils/format";

import { IUnit } from "types";
import Icon from "components/Icon";

interface Props {
  unit: IUnit;
  onClick: () => void;
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.tiles};
  margin-top: 1px;
  display: flex;
`;

const Teaser = styled.div`
  height: 100px;
  width: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const InfoWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;

  > * {
    flex-basis: 33%;
  }
`;

const Title = styled.h5`
  color: ${(props) => props.theme.textBody};
  font-size: ${(props) => props.theme.fontSizes.large};
  letter-spacing: 0.02em;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
`;

const Info = styled.span`
  color: ${(props) => props.theme.textMedium};
  font-size: ${(props) => props.theme.fontSizes.default};

  font-weight: 400;

  &:last-child {
    text-align: right;
  }
`;

const Value = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 19px;
  letter-spacing: 0.06em;
  font-weight: 500;
`;

const FavAction = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const UnitTile = ({ unit, onClick }: Props) => {
  const favoriteUnits = useAppSelector((state) => state.app.favoriteUnits);
  const dispatch = useAppDispatch();

  return (
    <Wrapper onClick={onClick}>
      <Teaser style={{ backgroundImage: `url('${unit.best_view_image}')` }} />
      <InfoWrapper>
        <Title>{unit.name}</Title>
        <Info>
          Etage <Value>{unit.floor}</Value>
        </Info>
        <FavAction
          onClick={() => {
            dispatch(toggleFavorite(unit.id));
          }}
        >
          <Icon
            name="heart"
            color={favoriteUnits.includes(unit.id) ? "primary" : "medium"}
            size="medium"
          />
        </FavAction>
        <Info>
          <Value>{unit.room}</Value> Zimmer
        </Info>
        <Info>
          <Value>{unit.size_total}</Value>m²
        </Info>
        <Info>
          <Value>{formatPrice(unit.price)}</Value>
        </Info>
      </InfoWrapper>
    </Wrapper>
  );
};

export default UnitTile;
