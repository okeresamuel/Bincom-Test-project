// This is Question one 

import { useEffect } from "react";
import { get_announced_pu } from "../../features/announced_pu_results/announced_pu_action";
import { useDispatch, useSelector } from "react-redux";
import Polingunits from "./Polingunits/polingunit";
import "../Announced_pollingunit/announced_pollingunit.css"

function Announced_pollingunit() {
  const dispatch = useDispatch();
  const { announced_pu } = useSelector((state) => state.announced);

  useEffect(() => {
    dispatch(get_announced_pu());
  }, []);

  return (
    <div>
     <h1>Result for any Individual polling unit</h1>
    <div className="header__Text">
    <h4>result_id</h4>
    <h4>polling_unit_uniqueid</h4>
    <h4>party_abbreviation</h4>
    <h4>party_score</h4>
    <h4>entered_by_user</h4>
    <h4>date_entered</h4>
    <h4>user_ip_address</h4>
    </div>
     
    {announced_pu.map((units)=> <>
        <Polingunits
          result_id={units.result_id}
          polling_unit_uniqueid={units.polling_unit_uniqueid}
          party_abbreviation={units.party_abbreviation}
          party_score={units.party_score}
          entered_by_user={units.entered_by_user}
          date_entered={units.date_entered}
          user_ip_address={units.user_ip_address}
        />
        </>)}
    </div>
  )
}
export default Announced_pollingunit;
