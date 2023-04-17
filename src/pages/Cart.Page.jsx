import React from 'react';
import CartCardComponent from '../components/Cart/CartCard.Component';
import { RxCross2 } from 'react-icons/rx';
import { useCartContext } from '../context/cart.context';

function CartPage() {
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <div className='container p-12 text-2xl'>
        No items found in the cart.
      </div>
    );
  }

  return (
    <>
      <div className='container mx-auto px-12 my-10'>
        <div className='w-full lg:flex gap-4'>
          <div className='lg:w-3/4 p-6 bg-white rounded'>
            <div className='mb-8'>
              <h2 className='text-xl font-bold mb-1'>Shopping Cart</h2>
              <div className='flex justify-between mb-4'>
                <p>{total_items} Course in Cart</p>
                <span
                  className='text-red-400 gap-1 flex items-center cursor-pointer hover:text-black'
                  onClick={() => clearCart()}
                >
                  <RxCross2 /> Clear All
                </span>
              </div>
            </div>
            {cartItems.map((cartItem) => {
              return (
                <CartCardComponent
                  key={cartItem.courseId}
                  cartItem={cartItem}
                />
              );
            })}
          </div>
          <div className='lg:w-1/4 p-6 bg-white rounded'>
            <div>
              <h2 className='text-xl font-bold mb-2'>Total</h2>
              <h2 className='text-2xl font-bold mb-4'>${total_amount}</h2>
              <button className='px-4 py-2 bg-orange-400 rounded hover:bg-orange-500 text-white font-bold'>
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