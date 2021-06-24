import React from 'react';
import Image from './assets/img/img.png';
import Alt from './assets/icons/Alt.png';
import Key from './assets/icons/Key.png';
import './App.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function logForm() {

  return (
    <div>
      <div className="container">
        <div className="img">
          <img src={Image} alt="" />
        </div>
        <div className="Log-Form">
          <form>
            <div className="Email">
              <div className="row">
                <div className="column">
                  <div className="Icon">
                    <img src={Alt} alt="" />
                  </div>
                </div>
                <div className="column">
                  <div className="formfield" id="emailfield">
                    <input type="email" name="email" id="email" required />
                    <label alt="email" htmlFor="email" placeholder="email">email</label>
                  </div>
                </div>
              </div>
              <div className="Pass">
                <div className="row">
                  <div className="column">
                    <div className="Icon">
                      <img src={Key} alt="" />
                    </div>
                  </div>
                  <div className="column"></div>
                  <div className="formfield" id="passwordfield">
                    <input type="password" name="password" id="password"  required />
                    <label alt="password" htmlFor="password" placeholder="password">password</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div>
            <div className="row">
              <div className="Bigcolumn">
                <a href=" "> Forget Password </a>
              </div>
              <div className="Smallcolumn">
                <ButtonComponent cssClass='e-info' >Login</ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default logForm;