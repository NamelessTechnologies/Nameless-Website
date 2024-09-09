import hsr_logo_2 from '../assets/hsr_logo_2.png';

function Home() {
  return (
      <div className='flex flex-col items-center justify-center mt-20'>
        <a href="https://hsr.hoyoverse.com/en-us/" target="_blank">
          <img src={hsr_logo_2} className="w-36 h-36" />
        </a>
        <h1 className='text-7xl text-center text-white'>The Nameless</h1>
        <p className='text-lg text-center text-white mt-8'>Tech Otakus Save the World</p>
      </div>
  )
}

export default Home;