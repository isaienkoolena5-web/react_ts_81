import GlobalStyles from "./styles/GlobalStyles";
// Импорты лекций
import Lesson07 from "./Lessons/lesson07/lesson07";
import Lesson08 from "./Lessons/Lesson08/Lesson08";

function App() {
  return (
    <>
    <GlobalStyles/>
         {/* Лекция 7. Map, TS */}
      <Lesson07/>
      <Lesson08/>
    </>
  );
}

export default App;