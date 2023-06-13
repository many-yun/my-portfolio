import styled from 'styled-components'

const OpenPcWarning = () => {
  return (
    <OpenPcWarningWrapper>
      <p>화면 크기를 키워주세요 :)</p>
    </OpenPcWarningWrapper>
  )
}

const OpenPcWarningWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999999999;
  background-color: #f0f1f3;
  display: none;

  & p {
    font-size: 1.2rem;
    color: #777;
    padding: 30px 50px;
    border: 3px solid #ddd;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default OpenPcWarning
