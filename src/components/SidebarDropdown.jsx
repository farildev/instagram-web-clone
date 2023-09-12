import React from 'react';
import { Menu } from '@headlessui/react';
import { Icon } from '../utils/icons';

const SidebarDropdown = () => {
  return (
    <Menu className="relative z-10">
      {() => (
        <>
        <Menu.Button className={`text-md p-3 my-1 font-semibold gap-x-4 flex w-full`}>
              <Icon name="hamburger" size={24}/>
              <span>Settings</span>
        </Menu.Button>
        <Menu.Items className={`absolute p-2 bottom-10 text-sm font-medium left-0 shadow-instagram bg-white w-[266px] rounded-xl gap-4 -translate-y-5`}>
                    <div className='border-b-[0.5rem] pb-2 border-gray-300/20'>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={` flex items-center gap-x-4 p-4 text-sm rounded-xl hover:bg-gray-300/20 ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                <Icon size={18} name="settings" />
                                Settings
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={` p-4 flex gap-x-4 items-center text-sm rounded-xl  hover:bg-gray-300/20 ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                <Icon size={18} name="activity"/>
                                Your Activity
                                
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`p-4 flex items-center gap-x-4 text-sm rounded-xl  hover:bg-gray-300/20 ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                <Icon size={18} name="saved"/>
                                Saved
                                
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`flex items-center p-4 gap-x-4 text-sm rounded-xl  hover:bg-gray-300/20 ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                <Icon size={18} name="theme"/>
                                Switch Appearance
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={` flex items-center p-4 gap-x-4 text-sm rounded-xl  hover:bg-gray-300/20 ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                <Icon size={18} name="report"/>
                                Saved
                            </a>
                        )}
                    </Menu.Item>
                    </div>

                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={` flex items-center p-4 text-sm rounded-xl hover:bg-gray-300/20 ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Switch Accounts
                            </a>
                        )}
                    </Menu.Item>
                    <div className='border-t border-gray-300/20'>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`flex items-center p-4 text-sm rounded-xl hover:bg-gray-300/20 ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Log Out
                            </a>
                        )}
                    </Menu.Item>
                    </div>
                </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default SidebarDropdown