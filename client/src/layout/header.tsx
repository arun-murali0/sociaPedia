import { IoSunnyOutline } from 'react-icons/io5';
// import { IoMoonOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function header() {
  return (
    <section className='p-5'>
      <div className='max-w-5xl mx-auto flex justify-between items-center'>
        <Link to='/'>SOCIAPEDIA</Link>
        <div className='flex gap-5 max-sm:gap-2 items-center justify-center'>
          <div>
            <IoSunnyOutline className='text-largerFont' />
          </div>
          <div>
            <CgProfile className='text-largerFont' />
          </div>
        </div>
      </div>
    </section>
  );
}
