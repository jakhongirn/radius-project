import React from 'react'
import TopNavbar from './topNavbar'
import Image from 'next/image'

const NavLink = ({ src, name }) => {
  return (
    <li className="py-2 flex items-center gap-x-3 hover:bg-white hover:text-rd-blue">
      <Image
        className="inline "
        src={`/images/icon-${src}.svg`}
        width={16}
        height={16}
        alt="icon"
      />{' '}
      {name}
    </li>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2  w-full bg-rd-blue rounded-tr-[2.5rem]">
          <div className="mt-14 text-white pl-12">
            <ul className="grid gap-y-4">
              <NavLink src="home" name="Главная" />
              <NavLink src="order" name="Заказы" />
              <NavLink src="products" name="Товары" />
              <NavLink src="rating" name="Отзывы" />
              <NavLink src="basket" name="Оформить заказ" />
            </ul>
          </div>
        </div>
        <div className='col-span-10'>
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
