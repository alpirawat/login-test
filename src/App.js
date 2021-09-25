import * as React from 'react';

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.form);
    let { form } = event.currentTarget;

    form.classList.add('was-validated');

  };

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const options = month.map((name, index) => (<option  key={`month${index+1}`} value={index+1}>{name}</option>));

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(100),( val, index) => year - index);
  const birthYear = years.map((year, index) => <option key={`year${index}`} value={year}>{year}</option>);

  return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <div className="heading-section"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="img left-pannel">
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Create an account</h3>
                    </div>
                  </div>
                  <form name="signin-form" action="#" className="signin-form" noValidate>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">Enter your email</label>
                      <input type="text" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                      <div className="invalid-tooltip">
                        Please add valid email address
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="dob">Date of birth (optional)</label>
                      <div className="d-flex flex-row mb-3" id="dob">
                        <div className="p-2">
                          <label className="label" htmlFor="date">Date</label>
                          <input type="text" id="date" className="form-control mb-0 no-validation"/>
                        </div>
                        <div className="p-2">
                          <label className="label" htmlFor="month">Month</label>
                          <select id="month" className="form-control">
                            {options}
                          </select>
                        </div>
                        <div className="p-2">
                          <label className="label" htmlFor="year">Year</label>
                          <select id="year" className="form-control mb-0">
                            {birthYear}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">Choose a strong password</label>
                      <input type="password" className="form-control" placeholder="Password" required />
                      <div className="invalid-tooltip">
                        Please enter strong password
                      </div>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-left left">
                        <label className="custom-radio mb-0">Individual&nbsp;
                          <input type="radio" name="loginType" value="individual" selected="{true}" />
                        </label>
                      </div>
                      <div className="w-50 left">
                        <label className="custom-radio mb-0">Agency&nbsp;
                          <input type="radio" name="loginType" value="agency" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="button" onClick={(e)=>handleSubmit(e)} className="form-control btn btn-primary rounded submit px-3">Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}