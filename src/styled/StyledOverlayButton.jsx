import styled from 'styled-components';

export default styled.button`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  padding: 10px;

  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.025em;
  color: #d50707;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px #d50707;
  outline: 1px solid #d50707;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;

  &:hover {
    /* color: #d50707; */
    /* background-color: #fae6e6; */
    color: #fae6e6;
    background-color: #ba2f2f;
    outline: 1px solid #fae6e6;
    transition: color 300ms ease-in-out;
  }
`;
