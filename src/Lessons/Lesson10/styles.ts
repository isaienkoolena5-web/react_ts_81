import styled from "@emotion/styled";

export const ToDolist = styled.div`
font-size: 20px;
color: rgb(38, 14, 95);
`;

export const Style = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  flex: 1;
  padding: 40px;
  background: rgb(142, 196, 223);
`;
 
export const Title = styled.h1`
color: rgb(155, 12, 12);
`;

export const InputElement = styled.input`
 width: 100%;
 height: 50px;
 font-size: 18px;

  &::placeholder {
    color: rgb(13, 82, 44);
  }
`;

export const Button1 = styled.button`
height: 70px;
  padding: 20px;
background-color:rgb(139, 172, 21);  
color: #140536;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
export const List = styled.h2`
color: rgb(60, 11, 196)
`;

export const Button2 = styled.button`
height: 30px;
width: 20px;
padding: 4px;
font-size: 15px;
background-color:rgb(230, 241, 179)
`;



