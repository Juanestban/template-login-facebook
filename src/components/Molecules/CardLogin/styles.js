import styled from 'styled-components'

export const ContainerCard = styled.div`
  height: 456px;
  width: 386px;
`

export const Card = styled.div`
  background-color: #fff;
  padding: 10px 15px 24px;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 40px 0 0;
  width: 386px;

  & .formGroup {
    font-size: 17px;
    width: 100%;
    display: inline-block;
    margin: auto;
    padding: 6px 0;
  }

  & .containerButton {
    margin-top: 10px;
    text-align: center;
  }

  & .containerButton a {
    color: #1877f2;
    font-size: 14px;
    font-weight: 500;
  }

  & .divider {
    align-items: center;
    border-bottom: 1px solid #dadde1;
    display: flex;
    margin: 20px 16px;
    text-align: center;
  }
`

export const RegisterContainer = styled.div`
  border-top: none;
  color: #1c1e21;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  padding-top: 0;
  margin-top: 28px;
  text-align: center;

  & a {
    font-weight: bold;
    color: rgb(28, 30, 33);
    text-decoration: none;
  }
`
