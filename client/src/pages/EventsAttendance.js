import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/EventsAttendance.css"

function Events() {
    return (
        <div className="container">
            <h1>Add Event</h1>
            <hr/>

            <div className="child">
                <form className="Events">
                    <table>
                        <h3> LEGEND </h3>
                        <tr>
                            <td>Term</td>
                            <td>means Term of Office</td>
                        </tr>
                        <tr>
                            <td class="no-wrap">Meeting Name</td>
                            <td>name of Stated Meetings</td>
                        </tr>
                        <tr>
                            <td>Meeting Date</td>
                            <td>date of Stated Meetings</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>officer’s position or position assigned to a Member during Opening and Closing Ceremonies</td>
                        </tr>
                        <tr>
                            <td>Performance</td>
                            <td>based on the delivery of the Ritual part. A member should attain and maintain Expert Status</td>
                        </tr>
                        <tr>
                            <td>Attendance</td>
                            <td>to be filled by Award’s Advisor or Chapter Dad</td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>    
            )
}

export default Events;