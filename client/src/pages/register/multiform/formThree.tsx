export default function FormThree() {
  return (
    <section>
      <div className='my-2'>
        <label htmlFor='firstname'>DOB</label>
        <input type='Date' className='w-full border my-1 p-1' />
      </div>
      <div className='my-2'>
        <label htmlFor='gender'>Gender</label>
        <select className='w-full border p-1'>
          <option>Male</option>
          <option>Female</option>
          <option>others</option>
        </select>
      </div>
      <div className='my-2'>
        <label htmlFor='profile'>profile</label>
        <input type='File' id='profile' className='my-2' />
      </div>
    </section>
  );
}
