// import {
//   ProfilePic,
//   Contact,
//   Profile,
//   Pic,
//   Info,
//   Button,
//   ButtonContainer,
// } from "../../styles/Styled";

import BSContainer from "react-bootstrap/Container";
import BSButton from "react-bootstrap/Button";
import BSImage from "react-bootstrap/Image";
import { Col as BSCol, Row as BSRow } from "react-bootstrap";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <BSContainer className='m-4 shadow-sm'>
      <BSRow>
        <BSCol xs={3}>
          <BSImage
            style={{ width: "5.2em" }}
            roundedCircle={true}
            src={profilePic}
            alt={`Profile of ${firstName} ${lastName}.`}
          />
        </BSCol>
        <BSCol xs={7} className='border-start d-flex align-items-center'>
          <div>
            <p style={{ margin: "0" }}>
              {firstName} {lastName}
            </p>
            <p>{phoneNumber}</p>
          </div>
        </BSCol>
        <BSCol xs={2} className='d-flex align-items-center'>
          <BSButton
            className='rounded-circle h-5 w-3'
            variant='light'
            size='sm'
          >{`\u2716`}</BSButton>
        </BSCol>
      </BSRow>
    </BSContainer>
  );
};

export default ContactCard;
