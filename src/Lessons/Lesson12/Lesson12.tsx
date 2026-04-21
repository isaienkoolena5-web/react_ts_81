import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import type { EmployeeData } from "./types";
import { ContactForm, ContentWrapper, CreateButton, EmployeeSection, FieldContainer, Page, Title, InfoCard, InfoBlock, InfoValue, FieldError, InfoLabel } from "./styles";



const employeeSchema = Yup.object().shape({
  name: Yup.string()
    .required("Field name is required")
    .min(2, "Min 2 symbols")
    .max(50, "Max 50 symbols"),
  surname: Yup.string()
    .required("Field surname is required")
    .max(50, "Max 15 symbols"),
  age: Yup.number()
    .typeError("Must be a number")
    .required("Field age is required")
    .min(18, "Min age 18")
    .max(80, "Max age 80"),
  job: Yup.string() 
  .max(30, "Max 30 symbols"),
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
      onBlur={formik.handleBlur} // для отслеживания касания
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

  





















