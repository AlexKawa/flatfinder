export {};

// import React from "react";
// import styled from "styled-components";
// import { RouteComponentProps } from "react-router-dom";

// type PathParamsType = {
//   param: string;
// };

// type Props = RouteComponentProps<PathParamsType> & {};

// const TitleTile = styled.div`
//   padding: 10px;
//   background-color: ${(props) => props.theme.colorDifference};
//   border-radius: 6px;
//   width: 100%;
//   height: auto;

//   // FIX!
//   height: 42px;

//   span {
//     text-transform: uppercase;
//     color: ${(props) => props.theme.primary};
//     font-weight: 500;
//     letter-spacing: 0.12em;
//     font-size: ${(props) => props.theme.fontSizes.small};
//   }
// `;

// const HouseTile = styled.div`
//   background-color: ${(props) => props.theme.background};
//   border-radius: 6px;
//   display: block;
//   margin-top: 10px;
//   padding: 10px;
//   cursor: pointer;
//   display: flex;

//   // FIX!
//   height: 70px;
// `;

// const FirstLevel = ({ history }: Props) => {
//   return (
//     <>
//       <TitleTile>
//         <span>SELLIN KURHAUS</span>
//       </TitleTile>
//       <HouseTile
//         onClick={() => {
//           history.replace(getNewPath(FAKE_DATA.id));

//           setPropertiesToRender(FAKE_DATA.properties);
//         }}
//       >
//         <Teaser style={{ backgroundImage: `url('${placeholder_img}')` }} />
//         <Info>
//           <h5>{FAKE_DATA.name}</h5>
//           <Status>{FAKE_DATA.properties.length} Apartments</Status>
//         </Info>
//       </HouseTile>
//     </>
//   );
// };

// export default FirstLevel;
