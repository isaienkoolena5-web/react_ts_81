import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import type { EmployeeData } from "./types";
import { ContactForm, ContentWrapper, CreateButton, EmployeeSection, FieldContainer, Page, Title, InfoCard, InfoBlock, InfoValue, FieldError, InfoLabel } from "./styles";



const employeeSchema = Yup.object().shape({
  name: Yup.string()
    .required("Field name is required")
    .min(2, "Min 2 symbols"),
  surname: Yup.string()
    .required("Field surname is required")
    .min(2, "Min 2 symbols"),
  age: Yup.number()
    .typeError("Must be a number")
    .required("Field age is required")
    .min(18, "Min age 18")
    .max(99, "Max age 99"),
  job: Yup.string() 
});
const EmployeePage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<EmployeeData | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      job: "",
    },
    validationSchema: employeeSchema,
    validateOnChange: false, // Ошибки появятся только при нажатии 
    onSubmit: (values) => {
      setSubmittedData(values as EmployeeData);
      console.log("Form Submitted:", values);
    },
  });

  return (
      <Page>
        <EmployeeSection>
          <Title>Create Employee</Title>
          
          <ContentWrapper>
            <ContactForm noValidate onSubmit={formik.handleSubmit}>
  <FieldContainer>
    <label htmlFor="name">Name*</label>
    <input
      id="name"
      name="name" 
      type="text"
      placeholder="Enter employee Name"
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur} // Добавь для отслеживания касания
    />
    {/* Ошибка покажется только если поле 'трогали' И есть текст ошибки */}
    {formik.touched.name && formik.errors.name && (
      <FieldError>{formik.errors.name}</FieldError>
    )}
  </FieldContainer>

  <FieldContainer>
    <label htmlFor="surname">Surname*</label>
    <input
      id="surname"
      name="surname"
      type="text"
      placeholder="Enter employee Surame"
      value={formik.values.surname}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched.surname && formik.errors.surname && (
      <FieldError>{formik.errors.surname}</FieldError>
    )}
  </FieldContainer>

  <FieldContainer>
                <label htmlFor="age">Age*</label>
                <input 
                  id="age" 
                  type="number" 
                  placeholder="Enter employee Age" 
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                
                />
                {formik.touched.age && formik.errors.age && (
      <FieldError>{formik.errors.age}</FieldError>
                )}
              </FieldContainer>
  
              <FieldContainer>
                <label htmlFor="job">Job Position</label>
                <input 
                  id="job" 
                  type="text" 
                  placeholder="Enter employee Position" 
                  value={formik.values.job}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />               
              </FieldContainer>
  
  <CreateButton type="submit">Create</CreateButton>
</ContactForm>
         
            <InfoCard $isHidden={!submittedData}>
              <InfoBlock>
                <InfoLabel>Name</InfoLabel>
                <InfoValue>{submittedData?.name}</InfoValue>
              </InfoBlock>
              
              <InfoBlock>
                <InfoLabel>Surname</InfoLabel>
                <InfoValue>{submittedData?.surname}</InfoValue>
              </InfoBlock>
  
              <InfoBlock>
                <InfoLabel>Age</InfoLabel>
                <InfoValue>{submittedData?.age}</InfoValue>
              </InfoBlock>
  
              <InfoBlock>
                <InfoLabel>Job Position</InfoLabel>
                <InfoValue>{submittedData?.job || "-"}</InfoValue>
              </InfoBlock>
            </InfoCard>
          </ContentWrapper>
          
        </EmployeeSection>
      </Page>
    );
  };
  
  export default EmployeePage;

  













  
//   const [formErrors, setFormErrors] = useState<FormErrors>({});

//   // Обработчик изменения инпутов
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     // Обновляем данные формы
//     setFormData(prev => ({ ...prev, [id]: value }));
    
//     // Если пользователь начал вводить данные в поле, убираем ошибку для этого поля.
//     if (formErrors[id as keyof EmployeeData]) {
//       setFormErrors(prev => ({ ...prev, [id]: undefined }));
//     }
//   };









// import { Button, LoginFormComponent, Style, Title } from "./styles";
// import { useState, type ChangeEvent } from "react";
// import { useFormik } from "formik";
// import type { LoginFormValues } from "./types";

// function Lesson12() {
//     const [inputValue, setInputValue] = useState<string>("");
//       const [tasks, setTasks] = useState<string[]>([]);
//       const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
//         setInputValue(event.target.value);
//       };
//       const addTask = () => {
//         if (inputValue.trim() === "") return;
    
//         setTasks([...tasks, inputValue]);
    
//         //Очищаем поле ввода
//         setInputValue("");
//       };
    
//       const deleteTask = (indexToDelete: number) => {
//         setTasks(tasks.filter((_, index) => index !== indexToDelete));
//       };
      
//       const formik = useFormik({
      
//           initialValues: {
//             name: "",
//             surname: "",
//             age: "",
//             jobPosition: "",
//           } as LoginFormValues,
//             // Привязка валидационной схемы к формику
//         //   validationSchema: schema,
//             validateOnChange: false,
      
//           // В параметре submit принимает значение из полей в момент события  submit
//           onSubmit: (values: LoginFormValues) => {
//             console.table(values);
//           },
//         });
//     return (
//         <LoginFormComponent onSubmit={formik.handleSubmit}>
// <Style>
//      <Title>Create Employee</Title>
           

//                  <Input 
//         name="name"
//         label="Name"
//         placeholder="Enter your name"
//         value={formik.values.name}
//         onChange={formik.handleChange}
//         error = {formik.errors.name}
//       />
//                        <Input 
//         name="surname"
//         label="Surname"
//         placeholder="Enter your Surname"
//         value={formik.values.surname}
//         onChange={formik.handleChange}
//         error = {formik.errors.surname}
//       />
//         <Input
//               name="age"
//               label="age"
//               placeholder="Enter your age"
//               value={formik.values.age}
//               onChange={formik.handleChange}
//                error = {formik.errors.age}
//             />

//              <Input
//               name="jobPosition"
//               label="jobPosition"
//               placeholder="Enter employee Position"
//               value={formik.values.jobPosition}
//               onChange={formik.handleChange}
//                error = {formik.errors.jobPosition}
//             />      

            
            
              

//                     <Button  type="submit">Create</Button>
          

//                 {/* <div id="infoCard" class="info-card hidden">
//                     <div class="info-block">
//                         <span class="info-label">Name</span>
//                         <span id="cardName" class="info-value"></span>
//                     </div>

//                     <div class="info-block">
//                         <span class="info-label">Surname</span>
//                         <span id="cardSurname" class="info-value"></span>
//                     </div>

//                     <div class="info-block">
//                         <span class="info-label">Age</span>
//                         <span id="cardAge" class="info-value"></span>
//                     </div>

//                     <div class="info-block">
//                         <span class="info-label">Job Position</span>
//                         <span id="cardJob" class="info-value"></span>
//                     </div>
//                 </div>
   

//             <p id="errorMessage" class="error-message"></p> */}
    
   
// </Style>
//  </LoginFormComponent>

//     )
// }   
// export default Lesson12;