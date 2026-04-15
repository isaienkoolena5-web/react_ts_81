import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BoxInfoProps {
    primary?: boolean;
}

const textStyles = css`
  color: white;
  font-weight: bold;
  text-decoration: underline;
`;


export const BoxInfo = styled.div<BoxInfoProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* min-width: 300px; */
  min-width: ${({primary}) => primary? "100%" : "300px"};
  min-height: 300px;
  /* background: rgb(39, 32, 64); */
  background: ${({ primary }) =>
  primary ? "rgb(39, 32, 64)" : "rgb(14, 77, 48)"};
  border: 2px solid rgb(205, 82, 164);
  border-radius: ${({primary}) =>primary? "20px" : "none"};
  color: white;
  font-weight: bold;
  font-size: 28px;
`;

export const Text = styled.p`
${textStyles}
font-size: 28px;
`;

export const Image = styled.img`
  width: 30px;
`;

export const Title = styled.h3`
  ${textStyles}
  font-size: 32px;
`;
