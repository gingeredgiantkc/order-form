import * as yup from 'yup';
import './App.css';
import InputField from './InputField.tsx';
import MultiStepForm, { FormStep } from './MultiStepForm.tsx';

const crisRegex = '[0-9]{6}';
const validationSchema = yup.object({
  fn: yup.string().required('First Name is required'),
  ln: yup.string().required('Last Name is required'),
  email: yup.string().email('').required('An email address is required'),
  crisId: yup.string().matches(crisRegex, 'ID does not meet requirements').required('CRIS ID is required'),
});

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <MultiStepForm
          initialValues={{
            fn:'',
            ln: '',
            email: '',
            crisId: '',
          }}
          onSubmit={values => {
            console.log(JSON.stringify(values, null, 2))
          }}
        >
          <FormStep
            stepName="Agent"
            onSubmit={() => console.log('Step 1 submit')}
            validationSchema={validationSchema}
          >
            <InputField name="fn" label="First Name" />
            <InputField name="ln" label="Last Name" />
            <InputField name="email" label="Email Address" />
            <InputField name="crisId" label="CRIS ID" />
          </FormStep>
        </MultiStepForm>
      </header>
    </div>
  );
}

export default App;
