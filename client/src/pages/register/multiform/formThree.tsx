export default function FormThree() {
  return (
    <section>
      <div className='my-2'>
        <label htmlFor='firstname'>DOB</label>
        <input type='Date' className='w-full border my-1 p-1' />
      </div>
      <div className='my-2'>
        <label htmlFor='gender'>Gender</label>
        <option>
          <select>Male</select>
          <select>Female</select>
          <select>Others</select>
        </option>
      </div>
      <div className='my-2'>
        <label htmlFor='profile'>profile</label>
        <input type='File' id='profile' />
      </div>
    </section>
  );
}
