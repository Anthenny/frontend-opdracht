import React from "react";

import { StyledFooter } from "../styles/Footer.styled";
import developerInfo from "../../const/developerInfo";

const Footer = () => {
  return (
    <StyledFooter>
      <h6>Developers.nl</h6>

      <div>
        <div>
          <img src="./assets/location_logo.png" alt="logo" />
          <p>{developerInfo.address}</p>
        </div>

        <div>
          <img src="./assets/scale_logo.png" alt="logo" />
          <p>{developerInfo.kvkNumber}</p>
        </div>
      </div>

      <div>
        <div>
          <img src="./assets/postcode_logo.png" alt="logo" />
          <p>{developerInfo.postalCode}</p>
        </div>

        <div>
          <img src="./assets/toolbox_logo.png" alt="logo" />
          <p>{developerInfo.bankOne}</p>
        </div>
      </div>

      <div>
        <div>
          <img src="./assets/phone_logo.png" alt="logo" />
          <p>{developerInfo.phoneNumber}</p>
        </div>

        <div>
          <img src="./assets/euro_logo.png" alt="logo" />
          <p>{developerInfo.bankTwo}</p>
        </div>
      </div>

      <div>
        <div>
          <img src="./assets/mail_logo.png" alt="logo" />
          <p>{developerInfo.email}</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
