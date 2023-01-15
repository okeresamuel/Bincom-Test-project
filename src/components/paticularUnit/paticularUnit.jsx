import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { get_announced_pu } from "../../features/announced_pu_results/announced_pu_action";

function PaticularUnit() {
  const dispatch = useDispatch();
  const { announced_pu } = useSelector((state) => state.announced);
  useEffect(() => {
    dispatch(get_announced_pu());
  }, []);

  const [partyAbbr, setpartAbbr] = useState("PDP")
  
  // Total votes
  let i = [];
  function Total(units){
  i.push(units.party_score)
  }

  return (
    <div>
        <select className="Input" onChange={((e)=>{setpartAbbr(e.target.value)})}>
            {announced_pu.map((i)=>
            <>
            <option value={i.party_abbreviation}>{i.party_abbreviation}</option>
            </>
            )}
        </select>
      <div className="header__Text">
        <h4>lga_id</h4>
        <h4>polling_unit_uniqueid</h4>
        <h4>party_abbreviation</h4>
        <h4>party_score</h4>
      </div>

      <div>
        {announced_pu
          .filter((item) => {
            return item.party_abbreviation === partyAbbr ? partyAbbr : "";
          })
          .map((units) => (
            <>
            {Total(units)}
            <div className="Rows">
              <p>{units.result_id}</p>
              <p>{units.polling_unit_uniqueid}</p>
              <p>{units.party_abbreviation}</p>
              <p>{units.party_score}</p>
            </div>
            </>
          ))}
      </div>
      <h1>Party Score stored: {i.reduce((a,b)=>{ return a+b},0)}</h1>
    </div>
  );
}

export default PaticularUnit;
