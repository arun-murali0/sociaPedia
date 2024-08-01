export default function FormOne() {
  return (
    <section>
      <div className='my-2'>
        <label htmlFor='firstname'>firstname</label>
        <input
          type='text'
          placeholder='Enter firstname'
          id='firstname'
          className='w-full border my-1 p-1'
        />
      </div>
      <div className='my-2'>
        <label htmlFor='lastname'>lastname</label>
        <input
          type='text'
          id='lastname'
          placeholder='Enter lastname'
          className='w-full border my-1 p-1'
        />
      </div>
      <div className='my-2'>
        <label htmlFor='username'>username</label>
        <input
          type='text'
          id='username'
          placeholder='Enter username'
          className='border w-full my-1 p-1'
        />
      </div>
    </section>
  );
}
