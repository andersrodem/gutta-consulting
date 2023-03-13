import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

      // Function will execute on click of button
      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('DrinkCAVA.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'DrinkCAVA.pdf';
                alink.click();
            })
        })
    }

  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
     
        <a className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4" href="/">
          <span className="ml-3 text-3xl"><img src="/images/logo.png" className="h-8 lg:h-10"></img></span>
          
         
        </a>
        <button
            className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
          <a className="mr-6 hover:text-white" href="/">Hjem</a>
          <a className="mr-6 hover:text-white" href="/alumni">Alumni</a>
          <a className="mr-6 hover:text-white" href="/vilkar">Vilkår</a>
        </nav>
        <button className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        onClick={onButtonClick}>
          Whitepaper
        </button>
        </div>
      </div>
    </header>
  );
}
