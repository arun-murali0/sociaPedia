import { Button, Card } from '../../components';

// login
export default function Login() {
  return (
    <section className='max-w-5xl h-screen mx-auto max-sm:w-full'>
      <div className='flex justify-center items-center h-full'>
        <Card classname='border p-10 min-h-fit w-96 bg-white border-grey shadow-md rounded-md'>
          <div>
            <div className='text-center text-largerFont'>Login</div>
            <div className='my-3'>
              <label htmlFor='email'>Email:</label>
              <input
                type='text'
                id='email'
                placeholder='Enter Your Email'
                className='border w-full my-1 p-1'
              />
            </div>
            <div className='my-3'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                placeholder='Enter Your password'
                className='border w-full my-1 p-1'
              />
            </div>
            <div className='my-4'>
              <Button classname='p-2 w-full bg-black text-white rounded-sm'>
                Login
              </Button>
            </div>
            <div className='text-center'>
              New User? <span>sign Up</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
