import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'
const RightSideBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill></RiVideoAddFill>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch></BiSearch>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt></CgMoreAlt>
                </div>
            </div>
        </div>
        <Contacts src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' name='Alex DD' status='online'></Contacts>
        <Contacts src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' name='Niki Sen' status='ofline'></Contacts>
        <Contacts src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' name='Ranjana Roy' status='online'></Contacts>
        <Contacts src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' name='Jhon Price' status='online'></Contacts>
        <Contacts src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' name='Dip Das Gupta' status='online'></Contacts>
        <Contacts src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png' name='Ravi Sen' status='ofline'></Contacts>
    </div>
  )
}

export default RightSideBar