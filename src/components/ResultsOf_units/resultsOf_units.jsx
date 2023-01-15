import { useSelector, useDispatch } from "react-redux";
import Results from "./Result/Result";
import { useState, useEffect } from "react";
import { get_announced_pu } from "../../features/announced_pu_results/announced_pu_action";

function ResultsOf_units() {

  const dispatch = useDispatch();
  const { announced_pu } = useSelector((state) => state.announced);
  const [input, setInputField] = useState();

  useEffect(() => {
    dispatch(get_announced_pu());
  }, []);


  // Total votes
  let i = [];
  function Total(units){
  i.push(units.party_score)
  }

  return (
    <>
      <h1>
        Filter! Enter the local govenment ID of choice to see the total votes
      </h1>
      <input
        type="search"
        placeholder="filter by  id"
        className="Input"
        onChange={(e) => setInputField(e.target.value)}
      ></input>

      <div className="header__Text">
        <h4>lga_id</h4>
        <h4>polling_unit_uniqueid</h4>
        <h4>party_abbreviation</h4>
        <h4>party_score</h4>
      </div>

      <div>
        {announced_pu
          .filter((item) => {
            if (!input) {
              return item;
            } else if (input.includes(item.polling_unit_uniqueid)) {
              return item;
            }
          })
          .map((units) => (
            <>
              {Total(units)}
              <Results
                result_id={units.result_id}
                polling_unit_uniqueid={units.polling_unit_uniqueid}
                party_abbreviation={units.party_abbreviation}
                party_score={units.party_score}
              />
            </>
          ))}
      </div>

      <h1 style={{color:"green"}}>TOTAL VOTES = {input && i.reduce((a,b)=>{ return a+b},0)} </h1>
    </>
  );
}

export default ResultsOf_units;
