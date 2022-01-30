import {
  ProfilePic,
  Contact,
  Profile,
  Pic,
  Info,
  Button,
  ButtonContainer,
} from "../../styles/Styled";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <Contact>
      <Profile>
        <Pic>
          <ProfilePic
            src={profilePic}
            alt={`Profile of ${firstName} ${lastName}.`}
          />
        </Pic>
        <Info>
          <p style={{ margin: ".2em", width: "100%" }}>
            {firstName} {lastName}
          </p>
          <p style={{ margin: ".2em" }}>{phoneNumber}</p>
        </Info>
      </Profile>
      <ButtonContainer>
        <Button>{`\u2716`}</Button>
      </ButtonContainer>
    </Contact>
  );
};

export default ContactCard;
