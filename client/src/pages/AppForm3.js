import "../styles/base.css";

function AppForm3() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-6">
          <h1>Application</h1>
        </div>

        <div className="col-md-6">
          <h1 className="position-absolute end-0"> [Chapter] </h1>
        </div>
      </div>
      <hr />

      <div className="row">
        <p>Have you applied in any other DeMolay Chapter?</p>
      </div>
    </div>
  );
}

export default AppForm3;
