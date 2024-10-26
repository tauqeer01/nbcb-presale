'use client'
import { useState } from 'react';
import type { NextPage } from 'next';
import { IoIosRocket } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { BsGenderMale } from "react-icons/bs";
const Home: NextPage = () => {
  // State for payment selection and price input
  const [selectedPayment, setSelectedPayment] = useState('ETH');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [nbcbAmount, setNbcbAmount] = useState(0);

  const nbcbRate = 0.01791; // NBCB Token current rate

  // Handle payment selection change
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.value);
  };

  // Handle price input change and calculate NBCB tokens
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value;
    setEnteredPrice(price);
    const calculatedAmount = parseFloat(price) / nbcbRate;
    setNbcbAmount(isNaN(calculatedAmount) ? 0 : parseFloat(calculatedAmount.toFixed(4)));
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-violet-700">
            NEO <br/> BLOCKCHAIN BANK
          </h1>
          <p className="py-4 sm:py-6 text-2xl md:text-6xl lg:text-6xl font-bold mb-2">
            Tokenize Real World Assets. Anything, Anywhere.
          </p>
          <p className='text-center text-lg flex justify-center mb-5'>
            As the designated currency token, NBCB Tokens play a pivotal 
            role in facilitating seamless transactions and granting users access<br /> 
            to various financial services, including trading, investments, payments, and more.
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
      <div className="flex justify-center mt-5 mb-5 shadow-xl shadow-slate-800 ">
        <div className="card bg-neutral text-neutral-content lg:w-[500px] sm:w-[500px]">
          <div className="card-body items-center text-center">
            <h1 className="card-title text-4xl font-bold">NBCB Presale</h1>
            <h1 className="card-title text-4xl font-bold">Stage 3</h1>
           <div className='mb-2'>
           <p className='text-white font-semibold text-lg'>1 NBCB = $0.01791 </p>
           <p className='text-white font-semibold text-lg'>Next Stage Price = $0.01901</p>
           </div>

            {/* Radio buttons for payment options */}
            <div className="form-control">
              <div className="flex justify-center gap-4">
                <button
                  className={`btn ${selectedPayment === 'ETH' ? 'btn-primary' : 'btn-outline'} sm:w-2/4  md:w-2/4 lg:w-2/4 px-4 py-2 text-white`}
                  onClick={() => setSelectedPayment('ETH')}
                >
                  ETH
                </button>
                <button
                  className={`btn ${selectedPayment === 'USDT' ? 'btn-primary' : 'btn-outline'} sm:w-3/4 md:w-3/4 lg:w-3/4 px-4 py-2 text-white`}
                  onClick={() => setSelectedPayment('USDT')}
                >
                  USDT
                </button>
                <button
                  className={`btn ${selectedPayment === 'Card' ? 'btn-primary' : 'btn-outline'} sm:w-2/4 md:w-2/4 lg:w-2/4 px-4 py-2 text-white`}
                  onClick={() => setSelectedPayment('Card')}
                >
                  Card
                </button>
              </div>
            </div>

            {/* Input for entering price */}
            <div className="w-full">
              <label className="label">
                <span className="label-text text-white font-semibold text-lg">Amount in {selectedPayment} You Pay:</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder={`Enter ${selectedPayment} amount`}
                value={enteredPrice}
                onChange={handlePriceChange}
              />
            </div>

            {/* Read-only input for NBCB tokens user will receive */}
            <div className="w-full mb-2">
              <label className="label">
                <span className="label-text text-white font-semibold text-lg">Amount in NBCB You Receive::</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={nbcbAmount}
                readOnly
              />
            </div>

            {/* Buy Now button */}
            <div className="justify-center w-full mb-2">
              <button className="btn btn-primary w-full">Buy Now</button>
            </div>
            <div className='flex justify-center align-item-center gap-3'>
              <button className='btn btn-sm btn-secondry sm:w-3/4 md:w-3/4 lg:w-3/4'><FaQuestionCircle />How To Buy?</button>
              <button className='btn btn-sm btn-secondry sm:w-3/4 md:3/4 lg:w-3/4'><GoRocket />How To Buy?</button>
             
            </div>
            <div className='flex justify-center'>
            <button className='btn btn-sm btn-secondry w-full'><BsGenderMale />Getting Error? Click here</button>
            </div>
          </div>
        </div>
      </div>
       
      <div className='grid grid-cols-1 gap-4 sm:w-3/4 md:w-3/4 lg:w-3/4 mt-5 mb-5 shadow-xl shadow-gray-700 rounded rounded-2xl p-2'>
        <h1 className='font-bold text-center text-3xl mb-3'>FAQs</h1>
        <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-2xl font-bold">What is NBCB ?</div>
  <div className="collapse-content">
    <p className='font-semibold text-xl'>NBCB is a blockchain platform designed to facilitate the tokenization of real-world assets. Our ecosystem offers tools to tokenize, invest, and manage assets such as real estate, precious metals, and other valuable commodities, leveraging blockchain technology for transparency and efficiency</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-2xl font-bold">What type of assets can i tokenized with NBCB?</div>
  <div className="collapse-content">
    <p className='font-semibold text-xl'> NBCB supports the tokenization of a wide variety of assets, including but not limited to real estate, art, gold, and corporate bonds. Our platform provides the flexibility to bring almost any valuable asset onto the blockchain.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-2xl font-bold">How can i start investing with NBCB?</div>
  <div className="collapse-content">
    <p className='font-semibold text-xl'>To begin investing with NBCB , Head over to nbcb.com https://nbcb.com Click Connect Wallet and connect using your DeFi Web3 wallet, we recommend using MetaMask & Trust Wallet, Make sure you are connected on Polygon Chain and have enough Polygon on Polygon network. Select from ETH, USDT, USDC, Input amount you want to purchase with and click on Buy Now. Complete the transaction in your wallet. For detailed guide on How To Buy NBCB  - Click Here. https://nbcb.com/how-to-buy/</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-2xl font-bold">What is NBCB Token?</div>
  <div className="collapse-content">
    <p className='font-semibold text-xl'> NBCB is the symbol of Neo Blockchain Bank  token. NBCB token is used for governance of the Neo Blockchain Bank and Ecosystem..</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-2xl font-bold">How will I receive  NBCB Tokens?</div>
  <div className="collapse-content">
    <p className='font-semibold text-xl'>
    Neo Blockchain Bank  (NBCB) tokens are transferred to your wallet in real time, to see the amount of tokens in your wallet please add NBCB as custom token in your wallet.
    </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-2xl font-bold">Where can i sell my NBCB Tokens</div>
  <div className="collapse-content">
    <p className='font-semibold text-xl'>Since we are currently on presale, you cannot sell or transfer your tokens. Once NBCB  goes live, users will be able to freely trade it on Uniswap.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-2xl font-bold">My Wallet is hacked what should I do?</div>
  <div className="collapse-content">
    <p className='font-semibold text-xl'> Unfortunately, there is nothing we can do on our end in 
      this situation. Never Share Your Seed Phrase or Private Key:
       Under no circumstances should you share your Seed Phrase or
        Private Key with anyone.
       These are sensitive and should be kept secure.</p>
  </div>
</div>
         </div>
     
    </div>
    
     
  );
};

export default Home;
