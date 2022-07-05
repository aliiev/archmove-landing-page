import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Input, Textarea, Button } from './'
import { AlertImg } from '../resources/images/'
import { CloseIcon } from '../resources/icons/'

const Alert = ({ isOpen, closeModal }) => {
  const [ isSent, setIsSent ] = useState(false)

  return (
    <>
      <Transition appear show={ isOpen } as={ Fragment }>
        <Dialog as="div" className="relative z-30" onClose={ () => {} }>
          <Transition.Child as={ Fragment } enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="md:container flex justify-center items-center text-center h-full mx-auto px-0 md:px-12 2xl:px-32">
              <Transition.Child as={ Fragment }enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="relative flex flex-col md:flex-row justify-start md:justify-between items-center bg-white rounded-lg text-left align-middle w-full h-full lg:h-3/4 2xl:h-2/3 transform shadow-xl transition-all overflow-auto md:overflow-hidden">
                  <button className="absolute bg-neutral-100 hover:bg-neutral-50 rounded top-6 md:top-10 right-6 md:right-10 p-2 md:p-3 lg:p-3.5" onClick={ closeModal }>
                    <CloseIcon className="stroke-primary" />
                  </button>
                  <div className="w-full md:w-1/2 lg:w-2/5 shrink-0 h-48 md:h-full">
                    <img className="w-full h-full object-cover" src={ AlertImg } alt="Contact form" />
                  </div>
                  <div className="w-full p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Contact Us</h2>
                    <p className="text-base 2xl:text-lg text-black font-medium md:mt-3">Leave us a message, we will contact you as soon as possible</p>
                    <div className="flex flex-col gap-4 md:w-full lg:w-2/3 my-4">
                      <Input id="email" type="email" title="Your Email" placeholder="Email" />
                      <Input id="name" type="text" title="Your Name" placeholder="Name" />
                      <Textarea id="message" title="Your Message" placeholder="Message" />
                    </div>
                    <Button text={ isSent ? 'Message Sent' : 'Submit' } onClick={ () => setIsSent(true) } disabled={ isSent } />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Alert