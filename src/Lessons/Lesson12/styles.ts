import styled from "@emotion/styled";

export const Page = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* background-color: #ffffff; */
  /* box-sizing: border-box; */
  font-family: Lato, Arial, sans-serif;
`;

export const EmployeeSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: #112233;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    padding-bottom: 20px;
  }
`;


export const Title = styled.h1`
  margin: 48px 0 0;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  line-height: 130%;
  font-weight: 700;
`;

export const ContentWrapper= styled.div`
  display: flex;
  align-items: flex-start;
  gap: 200px;
  margin-top: 44px;
  margin-left: 150px;

  @media (max-width: 1200px) {
    margin-left: 0;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 30px;
  }
`;

export const ContactForm = styled.form`
  width: 590px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 590px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #6f6f6f;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  input {
    width: 468px;
    height: 48px;
    border: 1px solid #d6dbe3;
    border-radius: 4px;
    padding: 12px;
    font-size: 16px;
    color: #3f3f3f;
    outline: none;
    background-color: #ffffff;

    &::placeholder {
      color: #bcc2cb;
    }

    &:focus {
      border-color: #9da7b5;
    }
  }
`;

export const CreateButton = styled.button`
  width: 470px;
  height: 70px;
  border: none;
  border-radius: 4px;
  background-color: #1f27f5;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const InfoCard = styled.div<{ $isHidden: boolean }>`
  display: ${props => (props.$isHidden ? 'none' : 'flex')};
  width: 456px;
  height: 470px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 60px;
  flex-direction: column;
  gap: 50px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 590px;
  }
`;

export const InfoLabel= styled.div  `
color: #6F6F6F;
    width: 336px;
    height: 21px;
    font-size: 20px;
    line-height: 130%;
`;
 

export const InfoValue = styled.div`
display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const InfoBlock = styled.div`
width: 336px;
    height: 36px;
    color: #20099e;
    font-size: 25px;
    line-height: 130%;
    font-weight: 700;
    word-break: break-word;

`;

export const FieldError = styled.span`
  color: #d93025; 
  font-size: 14px;
  line-height: 18px;
  margin-top: -4px; 
  display: block; /* Чтобы занимал отдельную строку */
`;


















