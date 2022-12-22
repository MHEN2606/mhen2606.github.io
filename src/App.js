import './style.css';
import face from './face.png';
import RedLine from './RedLine';
import Portofolio from './Portofolio';

function App() {
  return (
    <div className='bg-[#101429] space-y-3'>

      <div className='p-10'>

        <img src={face} className='w-[100px] h-[191.78px] md:w-[190px] h-[291.78px]' alt='Muka Memet'/>
        <div className='text-[#B28100] text-[32px]'>
          Welcome to Matthew Mahendra's Personal Website
        </div>
        <blockquote className='text-[#B28100] text-xl italic'>
          Non Multa Sed Multum
        </blockquote>
        
      </div>
      
      <RedLine />
      

      <div className='p-10 space-y-3'>
        <div className='text-[32px] text-[#CBCBCB]'>
          About Me
        </div>

        <div className='text-[#CBCBCB] text-[20px] space-y-10'>

          <div>
          My name is Matthew Mahendra, a Computer Science/Informatics Engineering student at Bandung Institute of Technology. 
          I am currently residing in Jakarta, Indonesia. <br />
          My interest, currently, are on data science and artificial intelligence.
          </div>

          <div className='mt-[20px] text-[#CBCBCB] text-[20px]'>
            Email: 13521007@mahasiswa.itb.ac.id <br />
            Github: MHEN2606
          </div>

        </div>

      </div>

      <RedLine />
      
      <Portofolio />
      
    </div>
  );
}

export default App;
