import React from "react";

import { IUnit } from "types";

import UnitTile from "./UnitTile";

interface Props {
  units: IUnit[];
  onUnitClick: (unitId: string) => void;
}

const SecondLevel = ({ units, onUnitClick }: Props) => {
  return (
    <>
      {units.map((unit) => (
        <UnitTile
          unit={unit}
          onClick={() => onUnitClick(unit.id)}
          key={unit.id}
        />
      ))}
    </>
  );
};
export default SecondLevel;
