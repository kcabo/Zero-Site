import { Logo } from './logo';
import { Tweet } from './tweet';

export function App() {
  return (
    <div>
      <header className='h-14 p-2 flex justify-center border-b border-gray-200'>
        <Logo />
      </header>

      <main className=''>
        <div className='px-4 py-6 container lg:max-w-screen-xl mx-auto space-y-6 mb-5'>
          <h1 className='text-4xl text-gray-700 font-black'>
            スイマーズゼロは
            <br className='md:hidden' />
            サービスを終了しました
          </h1>

          <div className='flex flex-col lg:flex-row'>
            <div className='text-gray-700 space-y-3 leading-relaxed lg:text-lg lg:leading-loose'>
              <p>ご利用いただいた皆様へ</p>
              <p>
                サービス開始後、皆様からたくさんの反響を頂けました。ありがとうございました。
              </p>
              <p>
                スイマーズゼロが目指したのはオープンな水泳界です。
                優れた選手ではなくとも、自分のデータが可視化されたり、ランキングに載ったりできる。
                サービスを通じて、日本全国の誰かをライバルにできる。
              </p>
              <p>
                数字で戦う水泳という競技だからこそ、データの恩恵を普遍的に提供したい。
                そしてどんなレベルの選手でも等しく水泳を楽しみ、アツくなれたらいい。
                「全員、ランクイン。」という本サービスのキャッチコピーにはそんな思いが込められていました。
              </p>
              <p>
                サービスが稼働した100日間で、11万回以上のアクセスをいただきました。
                スイマーズゼロをご利用いただいた方に、改めて感謝申し上げます。
                また、当サービスによりご迷惑をおかけした各所に深くお詫び申し上げます。
              </p>
              <p>さらなる水泳界の発展を願って。</p>
              <p className='font-bold'>2021年12月23日 スイマーズゼロ開発者</p>
            </div>
            <div className='flex-shrink-[0.7] lg:pt-16'>
              <img src='/ogp.webp' alt='OGP' />
            </div>
          </div>
        </div>

        <div className='space-y-5 py-8 bg-slate-100 px-2'>
          <h2 className='text-sky-500 text-3xl font-bold text-center'>
            新しいサービスをリリースしました
          </h2>
          <p className='text-gray-800 text-lg text-center'>
            スイマーズゼロとは全く異なる、新しい水泳向けサービスをリリースしました。
            <br />
            興味がございましたらぜひ御覧ください
          </p>
          <Tweet />
        </div>
      </main>

      <footer className='text-gray-600 border-t border-gray-200 '>
        <div className='container lg:max-w-screen-lg px-3 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <a className='flex h-10 title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <Logo />
            <span className='ml-3 text-xl font-black'>SWIMMERS ZERO</span>
          </a>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            © 2021 スイマーズゼロ
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a
              href='https://twitter.com/swim_zero'
              className='ml-3 text-gray-500'
            >
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
