import { useFormContext } from 'react-hook-form';

export default function FormTwo() {
  const { register } = useFormContext();

  return (
    <section>
      <div className='my-2'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          {...register('email')}
          placeholder='Enter email'
          className='w-full border my-1 p-1'
        />
      </div>
      <div className='my-2'>
        <label htmlFor='password'>password</label>
        <input
          type='password'
          {...register('password')}
          id='password'
          placeholder='Enter password'
          className='w-full border my-1 p-1'
        />
      </div>
      <div className='my-2'>
        <label htmlFor='cPassword'>confirm password</label>
        <input
          type='password'
          {...register('confirm password')}
          id='cPassword'
          placeholder='confirm password'
          className='border w-full my-1 p-1'
        />
      </div>
    </section>
  );
}
