import { Logo } from './logo';

export function App() {
  return (
    <>
      <Logo />
      <p className='text-lg font-bold text-red-700'>Hello Vite + Preact!</p>
      <p>
        <a
          class='link'
          href='https://preactjs.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Preact
        </a>
      </p>
    </>
  );
}
