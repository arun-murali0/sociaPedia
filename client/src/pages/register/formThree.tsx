import { useFormContext } from 'react-hook-form';

enum genderprops {
  'male',
  'female',
  'others',
}
interface FormType {
  DOB: Date;
  gender: genderprops;
  profile: File;
}

export default function FormThree() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();
  return (
    <section>
      <div className='my-2'>
        <label htmlFor='DOB'>DOB</label>
        <input
          type='Date'
          {...register('DOB')}
          className='w-full border my-1 p-1'
        />
      </div>
      <div className='my-2' {...register('gender')}>
        <label htmlFor='gender'>Gender</label>
        <select className='w-full border p-1'>
          <option value={'Male'}>Male</option>
          <option value={'female'}>Female</option>
          <option value={'others'}>others</option>
        </select>
      </div>
      <div>{errors.gender?.message}</div>
      <div className='my-2'>
        <label htmlFor='profile'>profile</label>
        <input
          type='File'
          {...register('profile')}
          id='profile'
          className='my-2'
        />
      </div>
    </section>
  );
}
