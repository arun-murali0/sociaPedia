import { useMultiForm } from '../../hooks/useForm';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Card } from '../../components';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import FormOne from './formOne';
import FormTwo from './formTwo';
import FormThree from './formThree';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchemaTypes, registerSchema } from '../../utils/validation';

export default function Register() {
  const { steps, currentStepIndex, currentStep, prev, next, isFirst, isLast } =
    useMultiForm([<FormOne />, <FormTwo />, <FormThree />]);

  // hook form API
  const methods = useForm<registerSchemaTypes>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<registerSchemaTypes> = (data) => {
    console.log('submitted', data);
  };

  const handleNext = async () => {
    const currentSchema = steps[currentStepIndex];
    console.log(methods.getValues());
    const isValid = await methods.trigger(Object.keys(currentSchema) as any);
    console.log(isValid);
    if (isValid) {
      next();
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='max-w-5xl h-screen mx-auto max-sm:w-full max-sm:p-5'
      >
        <div className='flex justify-center items-center h-full'>
          <Card classname='border p-10 min-h-fit w-96 bg-white border-grey shadow-lg rounded-md'>
            <div>
              <div className='text-right'>
                {currentStepIndex + 1}/{steps.length}
              </div>
              <div className='text-center font-semibold text-largerFont'>
                SignUp
              </div>
              {/* multiForm component */}
              <div>{currentStep}</div>
              <div className='my-5 text-right'>
                {isFirst ? null : (
                  <Button
                    classname='border-black px-5 py-1 mx-2 bg-black text-white'
                    onClick={prev}
                    type='button'
                  >
                    Prev
                  </Button>
                )}
                {isLast ? (
                  <Button classname='px-5 border-black py-1 bg-black text-white'>
                    Submit
                  </Button>
                ) : (
                  <Button
                    type='button'
                    classname='px-5 border-black py-1 bg-black text-white'
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </div>
              <div className='text-center'>
                Already Registered?
                <span className='text-blue mx-1'>
                  <Link to={'/login'}>Sign In</Link>
                </span>
              </div>
              <div className='text-center text-blue my-2'>
                <Link to={'/'}>Home</Link>
              </div>
            </div>
          </Card>
        </div>
      </form>
    </FormProvider>
  );
}
