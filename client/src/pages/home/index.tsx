import { Header } from '../../layout';
import { Login } from '../index';

export default function Home() {
  return (
    <div className='bg-grey h-screen'>
      <nav className='bg-white'>
        <Header />
      </nav>
      <main className='max-sm:p-2'>
        <Login />
      </main>
    </div>
  );
}
