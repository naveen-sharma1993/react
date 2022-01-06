import React from "react";

const Options = (props) => {
  const { v, i } = props.data;

  const fnChange = (eve) => {
    let val = eve.target.value;
    let ind = eve.target.id;
    props.fnPrepareOptions(val, ind);
  };

  const fnAdd = () => {
    props.fnAddOptions();
  };

  const fnDel = (index) => {
    props.fnDeleteOptions(index);
  };

  return (
    <div className="row mb-3">
      <div className="col-5 text-end ">
        <b>Option:{i + 1}</b>
      </div>
      <div className="col-3">
        <input onChange={fnChange} id={i} value={v} className="form-control" />
      </div>
      <div className="col-4">
        <input
          onClick={fnAdd}
          type="button"
          value="+"
          className="btn btn-primary me-1"
        />
        <input
          onClick={() => fnDel(i)}
          type="button"
          value="-"
          className="btn btn-primary"
        />
      </div>
    </div>
  );
};

export default Options;
