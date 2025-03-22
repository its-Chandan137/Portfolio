import React, { useEffect, useState } from "react";
import './Toaster.scss';

const Toaster = ({ type = "success", message, onClose, duration = 3000 }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(onClose, 300); // Matches slide-out animation duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const toastStyles = {
    success: {
      iconBg: "bg-green-100 dark:bg-green-800",
      iconText: "text-green-500 dark:text-green-200",
      iconPath:
        "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z",
    },
    error: {
      iconBg: "bg-red-100 dark:bg-red-800",
      iconText: "text-red-500 dark:text-red-200",
      iconPath:
        "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z",
    },
    warning: {
      iconBg: "bg-orange-100 dark:bg-orange-700",
      iconText: "text-orange-500 dark:text-orange-200",
      iconPath:
        "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z",
    },
  };

  const { iconBg, iconText, iconPath } = toastStyles[type];

  return (
    <div
      className={`Toaster flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 bg-second-bg-color ${
        closing ? "slide-out" : ""
      }`}
      role="alert"
    >
      <div className={`inline-flex items-center justify-center flex-shrink-0 w-16 h-16 ${iconText} ${iconBg} rounded-lg`}>
        <svg
          className="w-10 h-10"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d={iconPath} />
        </svg>
        <span className="sr-only">{type} icon</span>
      </div>
      <div className="toaster_message ms-3 font-normal">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={() => {
          setClosing(true);
          setTimeout(onClose, 300);
        }}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toaster;
