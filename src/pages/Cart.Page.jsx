import React from 'react';
import CartCardComponent from '../components/Cart/CartCard.Component';
import { RxCross2 } from 'react-icons/rx';

function CartPage() {
  return (
    <>
      <div className='container mx-auto px-12 my-10'>
        <div className='w-full lg:flex gap-4'>
          <div className='lg:w-3/4 p-6 bg-white rounded'>
            <div className='mb-8'>
              <h2 className='text-xl font-bold mb-1'>Shopping Cart</h2>
              <div className='flex justify-between mb-4'>
                <p>4 Course in Cart</p>
                <span className='text-red-400 gap-1 flex items-center cursor-pointer hover:text-black'><RxCross2/> Clear All</span>
              </div>
            </div>
            <CartCardComponent />
            <CartCardComponent />
            <CartCardComponent />
            <CartCardComponent />
          </div>
          <div className='lg:w-1/4 p-6 bg-white rounded'>
            <div>
              <h2 className='text-xl font-bold mb-2'>Total</h2>
              <h2 className='text-2xl font-bold mb-4'>$19.98</h2>
              <button className='px-4 py-2 bg-orange-400 rounded text-white font-bold'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
