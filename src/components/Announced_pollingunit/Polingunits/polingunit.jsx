function Polingunits({
  result_id,
  polling_unit_uniqueid,
  party_abbreviation,
  party_score,
  entered_by_user,
  date_entered,
  user_ip_address,
}) {
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

    
    <div>
    <p>{entered_by_user}</p>
    </div>

    <div>
    <p>{date_entered}</p>
    </div>


    <div>
    {user_ip_address}
    </div>

    </div>
    </>
  );
}

export default Polingunits;
