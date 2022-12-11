const EmailPreview = () => {
    return (
        <div className="email-preview">
            <div className="fontw-500">Email preview</div>
            <div className="preview-box">
                <div className="preview-title">
                    Subject: Summary of consultation No 8 , 4 February 2022
                </div>
                <div className="biometrics">
                    <div className="fontw-500 mb-2">Biometrics</div>
                    <div>
                        <span className="field-name">Country: </span><span className="input-val">{localStorage.getItem("country")}</span>
                    </div>
                    <div className="flex-field">
                        <div className="left-field">
                            <div className="field-name">
                                Height
                            </div>
                            <div className="input-val">
                                {localStorage.getItem("height")}cm
                            </div>
                        </div>
                        <div className="mid-field">
                            <div className="field-name">
                                Weight
                            </div>
                            <div className="input-val">
                                {localStorage.getItem("weight")}kg
                            </div>
                        </div>
                        <div className="right-field">
                            <div className="field-name">
                                Waist
                            </div>
                            <div className="input-val">
                                {localStorage.getItem("waist")}cm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goals">
                    <div className="flex-field">
                        <div className="left-field-goals">
                            <div className="field-name">
                                Short Term Goals
                            </div>
                            <div className="input-val">
                                <ul>
                                    <li>{localStorage.getItem("shortTermGoals")}</li>
                                    {/* <li>Goal1</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="right-field-goals">
                            <div className="field-name">
                                Long Term Goals
                            </div>
                            <div className="input-val">
                                <ul>
                                    <li>{localStorage.getItem("longTermGoals")}</li>
                                    {/* <li>Goal1</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="flex-field">
                        <div className="left-field-goals">
                            <div className="field-name">
                                When
                            </div>
                            <div className="input-val">
                                {localStorage.getItem("shortWhen")}
                            </div>
                        </div>
                        <div className="right-field-goals">
                            <div className="field-name">
                                When
                            </div>
                            <div className="input-val">
                                {localStorage.getItem("longWhen")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="info-title">
                        <div className="fontw-500">Personal Info</div>
                        <div className="yes-no">3 × Yes  1 × No</div>
                    </div>
                    <div className="flex-field flex-field-info">
                        <div className="left-field-info field-name">
                            Do you feel that your weight affects
                            your health and quality of
                            life?
                        </div>
                        <div className="right-field-info input-val">
                            {localStorage.getItem("feel")}
                        </div>
                    </div>
                    <div className="flex-field flex-field-info">
                        <div className="left-field-info field-name">
                            Are there times of the day when you are more likely to consume
                            extra calories?
                        </div>
                        <div className="right-field-info input-val">
                            {localStorage.getItem("times")}
                        </div>
                    </div>
                    <div className="flex-field flex-field-info">
                        <div className="left-field-info field-name">
                            Do you mostly eat the way you want?
                        </div>
                        <div className="right-field-info input-val">
                            {localStorage.getItem("mostly")}
                        </div>
                    </div>
                    <div className="flex-field flex-field-info pb-3 pb-4">
                        <div className="left-field-info field-name">
                            Are you as active as you want to be?
                        </div>
                        <div className="right-field-info input-val">
                            {localStorage.getItem("active")}
                        </div>
                    </div>
                </div>
                <div className="fontw-500" style={{ color: "#8a8a8b" }}>
                    Thor Solutions
                </div>
                <div style={{ marginTop: "-4px" }}>
                    <a href="#" style={{ color: "#aeafae", textDecoration: "none" }}>www.thor-solutions.com</a>
                </div>
            </div>
        </div>
    )
}

export default EmailPreview