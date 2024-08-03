import { useFormContext } from 'react-hook-form';

import { TextField } from '../../components/textField';

interface FormType {
  firstname: string;
  lastname: string;
  username: string;
}

export default function FormOne() {
  const { register } = useFormContext<FormType>();

  return (
    <section>
      <TextField
        id='firstname'
        htmlFor='firstname'
        type='text'
        placeholder='Enter fisrtname'
      />

      <div className='my-2'>
        <label htmlFor='lastname'>lastname</label>
        <input
          type='text'
          {...register('lastname')}
          id='lastname'
          placeholder='Enter lastname'
          className='w-full border my-1 p-1'
        />
      </div>
      <div className='my-2'>
        <label htmlFor='username'>username</label>
        <input
          type='text'
          {...register('username')}
          id='username'
          placeholder='Enter username'
          className='border w-full my-1 p-1'
        />
      </div>
    </section>
  );
}
