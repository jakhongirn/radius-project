import React from 'react'
import Image from 'next/image'

const TopNavbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between mx-12 my-6">
        <div className="">
          <h1 className="text-xl uppercase">Logo</h1>
        </div>

        <div className='flex gap-x-8'>
          <div>
            <Image
              src="/images/notification.svg"
              className=''
              width={28}
              height={28}
              alt=""
            ></Image>
          </div>
          <div className="bg-rd-blue -my-6 py-6 -mr-12 pr-12 pl-12 rounded-bl-[2.5rem]">
            <h2 className="text-lg text-white">
              Личный кабинет
              <Image
                src="/images/cabinet.svg"
                className="inline ml-2"
                width={32}
                height={32}
                alt=""
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
