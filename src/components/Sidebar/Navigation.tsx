import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import {
  RouteComponentProps,
  withRouter,
  useRouteMatch,
  Link,
} from "react-router-dom";

import FAKE_DATA from "./testData.json";
import placeholder_img from "assets/placeholder-50x50.png";
import { routeWithParams } from "utils/common";

import SecondLevel from "./SecondLevel";

type PathParamsType = {
  param: string;
};

type Props = RouteComponentProps<PathParamsType> & {
  setLevel: (lvl: number) => void;
};

interface IUnit {
  id: string;
  int_id: string;
  room: number;
  type: string;
  name: string;
  description: null;
  status: string;
  room_count: number;
  floor: string;
  size_total: number;
  tag: null;
  category: null;
  kind: string;
  best_view: string;
  best_view_image: string;
  sold: boolean;
  price: number;
  price_toal: number;
  images: string[];
}

const TitleTile = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.colorDifference};
  border-radius: 6px;
  width: 100%;
  height: auto;

  // FIX!
  height: 42px;

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.primary};
    font-weight: 500;
    letter-spacing: 0.12em;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const HouseTile = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 6px;
  display: block;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;

  // FIX!
  height: 70px;
`;

const Teaser = styled.div`
  height: 45px;
  width: 45px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Info = styled.div`
  margin-left: 10px;
  flex: 1;

  h5 {
    font-family: "Montserrat";
    font-size: ${(props) => props.theme.fontSizes.default};
    letter-spacing: 0.02em;
    line-height: 18px;
    color: ${(props) => props.theme.textBody};
    margin: 5px 0;
    font-weight: 400;
  }
`;

const Status = styled("p")<{ reserved?: boolean }>`
  color: ${(props) =>
    props.reserved ? props.theme.reserved : props.theme.success};
  background-color: ${(props) =>
    props.reserved ? props.theme.reservedDark : props.theme.successDark};
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSizes.miniscul};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 500;
  padding: 5px 10px;
  display: inline;
  font-family: "Montserrat";
`;

const BackTile = styled(TitleTile)`
  display: flex;
  height: 70px;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`;

const Navigation = ({ setLevel, history, location }: Props) => {
  const [propertiesToRender, setPropertiesToRender] = useState<any>(null);
  let { url } = useRouteMatch();

  const getNewPath = (houseId: string, unitId?: string) => {
    if (unitId) {
      return `${houseId}/${unitId}`;
    }

    return houseId;
  };

  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
    });
  }, [history]);

  console.log(history.length);

  return propertiesToRender ? (
    <>
      <BackTile
        onClick={() => {
          setLevel(1);
          setPropertiesToRender(null);
          history.goBack();
        }}
      >
        <Teaser style={{ backgroundImage: `url('${placeholder_img}')` }} />
        <span>
          <FormattedMessage id="sidebar.goBack" />
        </span>
      </BackTile>
      {/* <SecondLevel
        units={propertiesToRender}
        // unitLink={<Link to={`${url}/`} />}
      ></SecondLevel> */}
    </>
  ) : (
    <>
      <TitleTile>
        <span>SELLIN KURHAUS</span>
      </TitleTile>
      <HouseTile
        onClick={() => {
          setLevel(2);
          history.push(FAKE_DATA.id);

          setPropertiesToRender(FAKE_DATA.properties);
        }}
      >
        <Teaser style={{ backgroundImage: `url('${placeholder_img}')` }} />
        <Link to={`${url}/${FAKE_DATA.id}`}>
          <Info>
            <h5>{FAKE_DATA.name}</h5>
            <Status>{FAKE_DATA.properties.length} Apartments</Status>
          </Info>
        </Link>
      </HouseTile>
    </>
  );
};

export default withRouter(Navigation);
