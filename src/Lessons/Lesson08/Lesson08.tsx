// 1 способ - использование обычного css (стили прописываются в отдельном
// файле и добавляются классы в JSX)
import "./styles.css";
import { BoxInfo, Text, Image, Title } from "./styles";
import ImgAvatar from '../../assets/Avatar.jpg';
import Logo from '../../assets/logo.jpg';
import Button from "../../components/Button/Button";

function Lesson08() {
  // Объект стилей для 2 способа
  const textStyles = {
    color: "blue",
    fontSize: "30px",
  };
  return (
  <div className="lesson08-wrapper">
    {/* 2 способ - inline стили (переда объекта стилей в атрибут style) */}
        <div style={{ color: "red", fontSize: "24px" }}>
        Inline styles example
      </div>
        <p style={textStyles}>Inline styles example 2</p>
       <div style={textStyles}>Inline styles example 3</div>
    {/* 3 способ - использование библиотеки emotion (css in js) */}
      <BoxInfo primary>
        <Text>Emotion example 1</Text>
        <Image src={ImgAvatar}/>
      </BoxInfo>
      <BoxInfo>
        <Title>Lesson08</Title>
        <Text>Emotion example 2</Text>
        <Image src={Logo}/>
      </BoxInfo>
      <Button name="Refactor" id={0}/>
  </div>
  )
}
export default Lesson08;