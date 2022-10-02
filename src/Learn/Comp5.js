import "./form.css";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

function Comp5() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    comment: "",
    feature: "",
    radio: "",
    checkbox: "",
  });
  console.log("🚀 ~ file: Comp5.js ~ line 11 ~ Comp5 ~ user", user);

  const [userErr, setUserErr] = useState({
    nameErr: "",
    emailErr: "",
    ageErr: "",
    commentErr: "",
    featureErr: "",
    radioErr: "",
    checkboxErr: "",
  });
  console.log("🚀 ~ file: Comp5.js ~ line 19 ~ Comp5 ~ userErr", userErr);

  const [err, setErr] = useState({
    nameIcon: "",
    emailIcon: "",
    ageIcon: "",
    commentIcon: "",
    featureIcon: "",
    radioIcon: "",
    checkboxIcon: "",
  });
  console.log("🚀 ~ file: Comp5.js ~ line 27 ~ Comp5 ~ err", err);

  function handleChange(event) {
    const { name, value } = event.target;
    // setUser({ ...user, [name]: value });
    setUser({ ...user, [name]: DOMPurify.sanitize(value) });
  }
  const checkValidation = () => {
    let errors = { ...userErr };
    let icons = { ...err };

    // Validate Name
    if (user.name === "") {
      console.log("here");
      errors.nameErr = "Name cannot be Empty !";
      icons.nameIcon = "true";
    } else if (user.name.length <= 3) {
      console.log("here2");
      errors.nameErr = "Name must be more than 3 character";
      icons.nameIcon = "true";
    } else {
      icons.nameIcon = "false";
    }

    // Validate Email
    let mailformat = /^[^ ]+@[^ ]+\.([a-z]{2,3})$/;
    if (user.email === "") {
      errors.emailErr = "Email cannot be Empty !";
      icons.emailIcon = "true";
    } else if (!String(user.email).match(mailformat)) {
      errors.emailErr = "Email must be in proper format!";
      icons.emailIcon = "true";
    } else {
      icons.emailIcon = "false";
    }

    // Validate Age
    if (user.age === "") {
      errors.ageErr = "Age cannot be Empty !";
      icons.ageIcon = "true";
    } else {
      icons.ageIcon = "false";
    }

    // Validate Comment
    if (user.comment === "") {
      errors.commentErr = "Comment cannot be Empty !";
      icons.commentIcon = "true";
    } else {
      icons.commentIcon = "false";
    }

    // Validate Feature
    if (user.feature === "") {
      errors.featureErr = "This cannot be Empty !";
      icons.featureIcon = "true";
    } else {
      icons.featureIcon = "false";
    }

    // Validate Radio
    if (user.radio === "") {
      errors.radioErr = "This cannot be Empty !";
      icons.radioIcon = "true";
    } else {
      icons.radioIcon = "false";
    }

    // Validate Checkbox
    if (user.checkbox === "") {
      errors.checkboxErr = "This cannot be Empty !";
      icons.checkboxIcon = "true";
    } else {
      icons.checkboxIcon = "false";
    }

    setUserErr(errors);
    setErr(icons);
  };

  useEffect(() => {
    checkValidation();
  }, [user]);

  const getFormData = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <body className="body">
        <section className="section">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="container">
            <div className="form-container">
              <form id="form" onSubmit={getFormData}>
                <div className="row">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    // onChange={(e) => {
                    //   setUser({ ...user, name: e.target.value });
                    //   setUserErr({ nameErr: "" });
                    // }}
                    onChange={(e) => {
                      handleChange(e);
                      setUserErr({ nameErr: "" });
                    }}
                    value={user.name}
                  />
                  {err.nameIcon === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err.nameIcon === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.nameErr && <p className="err">{userErr.nameErr}</p>}
                </div>
                <div className="row">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    // onChange={(e) => {
                    //   setUser({ ...user, email: e.target.value });
                    //   setUserErr({ emailErr: "" });
                    // }}
                    onChange={(e) => {
                      handleChange(e);
                      setUserErr({ emailErr: "" });
                    }}
                    value={user.email}
                  />
                  {err.emailIcon === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err.emailIcon === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.emailErr && (
                    <p className="err">{userErr.emailErr}</p>
                  )}
                </div>
                <div className="row">
                  <label for="age">Age</label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                    autoComplete="off"
                    // onChange={(e) => {
                    //   setUser({ ...user, email: e.target.value });
                    //   setUserErr({ emailErr: "" });
                    // }}
                    onChange={(e) => {
                      handleChange(e);
                      setUserErr({ ageErr: "" });
                    }}
                    value={user.age}
                  />
                  {err.ageIcon === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err.ageIcon === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.ageErr && <p className="err">{userErr.ageErr}</p>}
                </div>
                <div className="row overflow">
                  <label for="feature">Which option best describes you ?</label>
                  <select
                    id="feature"
                    name="feature"
                    value={user.feature}
                    onChange={(e) => {
                      handleChange(e);
                      setUserErr({ featureErr: "" });
                    }}
                  >
                    <option>Select an option</option>
                    <option>Student</option>
                    <option>Intern</option>
                    <option>Professional</option>
                    <option>Other</option>
                  </select>
                  {err.featureIcon === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err.featureIcon === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.featureErr && (
                    <p className="err">{userErr.featureErr}</p>
                  )}
                </div>
                <div className="row">
                  <label>Would you recommend GeeksforGeeks to a friend?</label>
                  <br />
                  <div id="radio" className="radio">
                    <div>
                      <input
                        type="radio"
                        name="radio"
                        value="yes"
                        onChange={(e) => {
                          handleChange(e);
                          setUserErr({ radioErr: "" });
                        }}
                      />

                      <label for="yes">Yes</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="radio"
                        value="no"
                        onChange={(e) => {
                          handleChange(e);
                          setUserErr({ radioErr: "" });
                        }}
                      />
                      <label for="no">No</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="radio"
                        value="maybe"
                        onChange={(e) => {
                          handleChange(e);
                          setUserErr({ radioErr: "" });
                        }}
                      />
                      <label for="maybe">Maybe</label>
                    </div>
                  </div>
                  {err.radioIcon === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err.radioIcon === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.radioErr && (
                    <p className="err">{userErr.radioErr}</p>
                  )}
                </div>
                <div className="row">
                  <label for="lang">
                    Languages and frameworks known (Check all that apply)
                  </label>
                  <div id="checkbox" className="wrapper">
                    <div className="checkbox">
                      <div className="div">
                        <input
                          type="checkbox"
                          id="C"
                          value="C"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> C</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="C++"
                          value="C++"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> C++</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="C#"
                          value="C#"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> C#</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Java"
                          value="Java"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> Java</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Python"
                          value="Python"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> Python</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="JavaScript"
                          value="JavaScript"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> JavaScript</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="React"
                          value="React"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> React</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Angular"
                          value="Angular"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> Angular</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Django"
                          value="Django"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> Django</label>
                        <br />
                      </div>
                      <div className="div">
                        <input
                          type="checkbox"
                          id="Spring"
                          value="Spring"
                          name="checkbox"
                          onChange={(e) => {
                            handleChange(e);
                            setUserErr({ checkboxErr: "" });
                          }}
                        />
                        <label for="lang"> Spring</label>
                        <br />
                      </div>
                    </div>
                  </div>
                  {err.checkboxIcon === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err.checkboxIcon === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.checkboxErr && (
                    <p className="err">{userErr.checkboxErr}</p>
                  )}
                </div>{" "}
                <div className="row">
                  <label for="comment">Any comment or suggestion?</label>
                  <textarea
                    id="comment"
                    name="comment"
                    autoComplete="off"
                    // onChange={(e) => {
                    //   setUser({ ...user, comment: e.target.value });
                    //   setUserErr({ commentErr: "" });
                    // }}
                    onChange={(e) => {
                      handleChange(e);
                      setUserErr({ commentErr: "" });
                    }}
                    value={user.comment}
                  ></textarea>
                  {err.commentIcon === "true" ? (
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  ) : err.commentIcon === "false" ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : (
                    " "
                  )}
                  {userErr.commentErr && (
                    <p className="err">{userErr.commentErr}</p>
                  )}
                </div>
                <div>
                  {/* <button onClick={getFormData}>Submit</button> */}
                  <input type="submit" className="submit" value="Submit" />
                </div>
                <br />
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Comp5;
