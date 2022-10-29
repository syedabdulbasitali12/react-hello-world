import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
function Hi() {
  return (
    <div>
      <h2>
        <center>
          <u>
            <i>
              <b>"Basit's CV"</b>
            </i>
          </u>
        </center>
      </h2>

      <div className="row">
        <div className="column">
          <img
            src="https://raw.githubusercontent.com/syedabdulbasitali12/html-cv-flexbox/main/pic/basit.png"
            alt="left"
            width={150}
          />
          <table >
          
          

          <ul>
            <tr>
              <td>
                <li>
                  <b>NAME:</b>
                </li>
              </td>
              <td>Syed Abdul Basit Ali</td>
            </tr>
            <tr>
              <td>
                <li>
                  <b>FATHER'S NAME:</b>
                </li>
              </td>
              <td>Syed Faisal Hussain</td>
            </tr>
            <tr>
              <td>
                <li>
                  <b>AGE:</b>
                </li>
              </td>
              <td>18</td>
            </tr>
            <tr>
              <td>
                <li>
                  <b>ADDRESS:</b>
                </li>
              </td>
              <td>13D/2, Gulshan-e-Iqbal, Karachi</td>
            </tr>
            <tr>
              <td>
                <li>
                  <b>CONTACT NO:</b>
                </li>
              </td>
              <td>03142992966</td>
            </tr>
            <tr>
              <td>
                <li>
                  <b>EMAIL:</b>
                </li>
              </td>
              <td>basitalu82@gmail.com</td>
            </tr>
            <tr>
              <td>
                <li>
                  <b>GENDER:</b>
                </li>
              </td>
              <td>Male</td>
            </tr>
            <tr>
              <td>
                <li>
                  <b>NATIONALITY:</b>
                </li>
              </td>
              <td>Pakistani</td>
            </tr>
          </ul>
          </table>
        </div>
        <div className="column1">
          <h2>
            <i>
              <u>OBJECTIVE:</u>
            </i>
          </h2>
          <p>
            To make use of my interpersonal skills to achieve goals of a company
            that focuses on customer satisfaction and customer experience.
          </p>

          <h2>
            <i>
              <u>EDUCATION:</u>
            </i>
          </h2>
          <table>
            <ul>
              <tr>
                <td>
                  <li>
                    <b>SCHOOL:</b>
                  </li>
                </td>
                <td>Cambridge Public School</td>
              </tr>
              <tr>
                <td>
                  <li>
                    <b>COLLEGE:</b>
                  </li>
                </td>
                <a href="https://www.facebook.com/groups/nationalcollegekarachi/">
                  {" "}
                  National College
                </a>
              </tr>
              <tr>
                <td>
                  <li>
                    <b>UNIVERSITY</b>
                  </li>
                </td>
                <td>
                  <a href="https://www.ssuet.edu.pk/">Sir Syed University </a>
                </td>
              </tr>
            </ul>
          </table>

          <h3>
            <b>
              <u>
                <i>EXPERTISE:</i>
              </u>
            </b>
          </h3>
          <ol type="1">
            <li>Creativity.</li>
            <li>Interpersonal Skills.</li>
            <li>Critical Thinking.</li>
            <li>Problem Solving.</li>
            <li>Public Speaking.</li>
            <li>Teamwork Skills.</li>
            <li>Communication.</li>
          </ol>
          <h4>
            <b>
              <u>
                <i>HOBBIES:</i>
              </u>
            </b>
          </h4>
          <ol type="A">
            <li>Writing.</li>
            <li>Rapping.</li>
            <li>Travel.</li>
            <li>Reading.</li>
            <li>Sports.</li>
            <li>Photography.</li>
            <li>Computing.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
