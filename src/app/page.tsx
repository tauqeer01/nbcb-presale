import type { NextPage } from 'next';
import { IoIosRocket } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-3xl sm:text-4xl font-bold">NEO BLOCKCHAIN BANK</h1>
          <p className="py-4 sm:py-6 text-2xl md:text-6xl lg:text-6xl font-bold mb-2">
            Tokenize Real World Assets Anything, Anywhere.
          </p>
          <p className='text-center text-lg flex justify-center mb-5'>
            As the designated currency token, NBCB Tokens play a pivotal 
            role in facilitating seamless transactions and granting users access<br /> 
            to various financial services, including trading,
            investments, payments, and more.
          </p>

          <div className='flex justify-center align-center gap-4 mt-3'>
            <button className='btn btn-primary text-white font-semibold text-xl'>
              <IoIosRocket className='text-orange-300' /> Whitepaper
            </button>
            <button className="btn btn-primary text-white font-semibold text-xl">
              <AiFillThunderbolt /> Audit
            </button>
          </div>
        </div>
      </div>

      {/* Centering the card */}
      <div className="flex justify-center mt-5 mb-5">
        <div className="card bg-neutral  text-neutral-content lg:w-[700px]  sm:w-[700px]"
         
        >
          <div className="card-body items-center text-center">
            <h1 className="card-title text-4xl font-bold">NBCB Presale
            </h1>
            <h2 className='text-2xl fond-bold'>Stage 2</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-ghost">Deny</button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-ghost">Deny</button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-ghost">Deny</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;