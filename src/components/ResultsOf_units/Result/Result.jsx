
function Results({result_id, polling_unit_uniqueid, party_abbreviation, party_score,}){
    return (
      <>
      <div className="Rows">

      <div>
        <p>{result_id}</p>
      </div>
  
      <div>
      <p>{polling_unit_uniqueid}</p>
      </div>
  
      <div>
      <p><p>{party_abbreviation}</p></p>
      </div>
      
      <div>
      <p>{party_score}</p>
      </div>  
    </div>
      </>
    );
  }

  
  export default Results;