import styled from "styled-components";

export const Contact = styled.div`
  height: 5em;
  width: 30em;
  display: flex;
  padding: 16px 16px;
  margin: 32px;
  align-items: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;
export const Pic = styled.div`
  display: flex;
  width: 5em;
  border-right: 2px solid lightgrey;
  justify-content: center;
  padding-right: 16px;
`;
export const Info = styled.div`
  margin: 0px 16px;
  height: fit-content;
`;
export const ButtonContainer = styled.div`
  position: relative;
  height: fit-content;
`;
export const ProfilePic = styled.img`
  height: 5.2em;
  border-radius: 50%;
`;

export const Button = styled.button`
  width: 1.4rem;
  background: grey;
  border-radius: 50%;
  border: none;
  color: white;
  justify-content: center;
  font-size: 1rem;
`;
// height: 1.5em;
// width: 1.5em;
