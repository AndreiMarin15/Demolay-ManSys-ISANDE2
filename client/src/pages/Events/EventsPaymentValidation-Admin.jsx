import "../../styles/base.css";
import "../../styles/Events.css";

import axios from "axios";
import { useEffect, useState } from "react";

function EventsPaymentValidation() {
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [formData, setFormData] = useState({});

  const tableData = [
    ["1", "Attendance"],
    ["2", "Athletics"],
    ["3", "Civic Service"],
    ["4", "Conclave"],
    ["5", "Fine Arts"],
    ["6", "Fundraising"],
    ["7", "Installing"],
    ["8", "Journalism"],
    ["9", "Masonic Attendance"],
    ["10", "Masonic Service"],
    ["11", "Merit"],
    ["12", "Petitions"],
    ["13", "Religion"],
    ["14", "Ritual"],
    ["15", "Scholastics"],
    ["16", "Visitation"],
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/getChapters")
      .then((res) => {
        setChapters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (selectedChapter !== 0) {
      axios
        .get(`http://localhost:5000/getRequests/${selectedChapter}`)
        .then((res) => {
          if (res.data.isApproved !== true) setFormData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFormData({});
    }
  }, [selectedChapter]);

  const RenderTableData = () => {
    const updatedTableData = formData.meritBars || {};

    return tableData.map((rowData, index) => {
      const [, col2] = rowData;
      const meritBarsData = updatedTableData[col2] || {};
      const total =
        (meritBarsData.white +
          meritBarsData.red +
          meritBarsData.blue +
          meritBarsData.purple +
          meritBarsData.gold) *
          50 || 0;
      return (
        <tr key={index}>
          <td>{col2}</td>
          <td>{meritBarsData.white}</td>
          <td>{meritBarsData.red}</td>
          <td>{meritBarsData.blue}</td>
          <td>{meritBarsData.purple}</td>
          <td>{meritBarsData.gold}</td>
          <td>{total}</td>
        </tr>
      );
    });
  };

  const styles = {
    maxWidth: "200px",
    maxHeight: "200px",
    objectFit: "contain",
  };

  const onChangeChapter = (e) => {
    setSelectedChapter(+e.target.value);
  };

  const handleSubmit = () => {
    const props = {
      fieldToUpdate: "isApproved",
      updateValue: true,
    };

    axios
      .post(`http://localhost:5000/updateRequest/${formData._id}`, props)
      .then((res) => {
        alert(`Approved request for merit bars`);
        console.log("Updated and request: " + res.data);
        window.location.reload();
      });
  };

  return (
    <div className="container">
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Payment Validation for Approved Merit Bars</h1>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}

        <div className="col-md-5">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>White</th>
                <th>Red</th>
                <th>Blue</th>
                <th>Purple</th>
                <th>Gold</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{<RenderTableData />}</tbody>
          </table>
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}

        <div className="col-md-6">
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="chapter" className="col-form-label text-left">
                Chapter:
              </label>
            </div>
            <div className="col-md-9">
              <select
                className="form-select form-control"
                id="chapter"
                placeholder="Select Chapter"
                onChange={onChangeChapter}
              >
                <option value="0" muted>
                  Select Chapter
                </option>
                {chapters.map((chapter) => {
                  return (
                    <option key={chapter._id} value={chapter.chapterID}>
                      {chapter.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="total" className="col-form-label text-right">
                Total Amount to Pay:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                disabled
                id="uploadID"
                value={formData.total || 0}
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="uploadID" className="col-form-label text-right">
                Proof:
              </label>
            </div>
            <div className="col-md-9">
              {formData.proof ? (
                <img src={formData.proof} alt="img" style={styles} />
              ) : (
                <p></p>
              )}
            </div>
          </div>

          {/* Mark as Paid */}
          <div className="d-flex justify-content-end ms-5">
            <button
              type="button"
              form="submit"
              className="btn"
              onClick={handleSubmit}
              disabled={formData._id === undefined}
            >
              MARK AS PAID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPaymentValidation;
