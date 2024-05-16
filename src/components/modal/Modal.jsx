import React, { useState, useEffect } from 'react';
import Datepicker from 'flowbite-datepicker/Datepicker';

const Modal = () => {
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
    if (isOpen) {
      const datepickerEl = document.getElementById('datepickerId');
      new Datepicker(datepickerEl, {
        // options
      });
    }
 }, [isOpen]);

 return (
    <div>
      {/* Button to open the modal */}
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
              <div className="absolute inset-0 bg-black opacity-100"></div>
            </div>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-black  sm:p-6">
                <div className="sm:flex sm:items-start">
                 <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-white" id="modal-title">
                      Calendar Modal
                    </h3>
                    <div className="mt-2">
                      <div id="datepickerId"></div> {/* Place your Flowbite datepicker here */}
                    </div>
                 </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setIsOpen(false)}>
                 Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
 );
};

export default Modal;