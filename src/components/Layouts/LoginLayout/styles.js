import styled from 'styled-components'

export const ContainerLogin = styled.div`
  min-height: 100vh;
  padding-bottom: 112px;
  padding-top: 72px;
  background-color: #f0f2f5;
`

export const CenterContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  width: 946px;
  display: flex;
`

export const ContainImg = styled.div`
  margin-right: 0;
  padding-right: 32px;
  width: 580px;

  & figure {
    font-family: inherit;
    margin: 0;
    padding: 112px 0 16px;
  }

  & figure img {
    height: 100px;
    margin: -28px;
  }

  & h2 {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 28px;
    font-weight: normal;
    line-height: 32px;
    width: 500px;
    margin: 0;
    color: rgb(28, 30, 33);
  }
`

export const ContainerCardLogin = styled.div`
  display: inline-block;
  vertical-align: top;
`
