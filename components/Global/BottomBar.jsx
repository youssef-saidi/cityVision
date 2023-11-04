import routes from "@/constants/routes"
import Link from "next/link"

const BottomBar = () => {
    return (
      <nav className="lg:hidden flex relative bottom-0 w-screen   grid grid-cols-4 z-50">
        <div className="flex flex-col  md:py-4 py-3 items-center">
          <Link exact href={routes.HOME} className="my-1 colorGray">
            <svg className="relative -top-1" width="24" height="20" viewBox="0 0 18 20" fill="#5D6E81" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L9.44721 0.105573C9.16569 -0.0351909 8.83431 -0.0351909 8.55279 0.105573L9 1ZM17 5H18C18 4.62123 17.786 4.27496 17.4472 4.10557L17 5ZM1 5L0.552786 4.10557C0.214002 4.27496 0 4.62123 0 5H1ZM17 15L17.4472 15.8944C17.786 15.725 18 15.3788 18 15H17ZM9 19L8.55279 19.8944C8.83431 20.0352 9.16569 20.0352 9.44721 19.8944L9 19ZM1 15H0C0 15.3788 0.214002 15.725 0.552786 15.8944L1 15ZM8.55279 1.89443L16.5528 5.89443L17.4472 4.10557L9.44721 0.105573L8.55279 1.89443ZM16.5528 4.10557L8.55279 8.10557L9.44721 9.89443L17.4472 5.89443L16.5528 4.10557ZM9.44721 8.10557L1.44721 4.10557L0.552786 5.89443L8.55279 9.89443L9.44721 8.10557ZM1.44721 5.89443L9.44721 1.89443L8.55279 0.105573L0.552786 4.10557L1.44721 5.89443ZM16.5528 14.1056L8.55279 18.1056L9.44721 19.8944L17.4472 15.8944L16.5528 14.1056ZM9.44721 18.1056L1.44721 14.1056L0.552786 15.8944L8.55279 19.8944L9.44721 18.1056ZM2 15V5H0V15H2ZM18 15V5H16V15H18ZM8 9V19H10V9H8Z" />
            </svg>
          </Link>
          <Link exact href={routes.HOME} activeClassName="active" className="tracking-wider font-normal" style={{ fontSize: "9.8px" }} >DashBoard</Link>
        </div>
   
  
    
  
        <div className="flex flex-col  md:py-4 py-3 items-center">
          <Link exact href={routes.NOTIFICATIONS} className="my-1 colorGray pr-3">
            <svg className="relative -top-1 activeStroke" stroke="#5D6E81" width="24" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15H17.5L16.0951 13.5951C15.7141 13.2141 15.5 12.6973 15.5 12.1585V9C15.5 6.38757 13.8304 4.16509 11.5 3.34142V3C11.5 1.89543 10.6046 1 9.5 1C8.39543 1 7.5 1.89543 7.5 3V3.34142C5.16962 4.16509 3.5 6.38757 3.5 9V12.1585C3.5 12.6973 3.28595 13.2141 2.90493 13.5951L1.5 15H6.5M12.5 15V16C12.5 17.6569 11.1569 19 9.5 19C7.84315 19 6.5 17.6569 6.5 16V15M12.5 15H6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
  
          </Link>
          <Link exact href={routes.NOTIFICATIONS} activeClassName="active" className="tracking-wider font-normal" style={{ fontSize: "9.8px" }} >Notifications</Link>
        </div>
        <div className="flex flex-col  md:py-4 py-3 items-center">
          <Link exact href={routes.SETTINGS}className="my-1 colorGray " activeClassName="active">
            <svg className="relative -top-1" width="24" height="20" viewBox="0 0 16 24" fill="#5D6E81" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.31 2L10.72 4.48C9.87 4.17 8.96 4 8 4C7.05 4 6.13 4.17 5.29 4.47L5.7 2H10.31ZM10.72 19.52L10.31 22H5.7L5.29 19.53C6.13 19.83 7.05 20 8 20C8.96 20 9.87 19.83 10.72 19.52ZM12 0H4L3.05 5.73C1.19 7.19 0 9.45 0 12C0 14.55 1.19 16.81 3.05 18.27L4 24H12L12.96 18.27C14.81 16.81 16 14.54 16 12C16 9.46 14.81 7.19 12.96 5.73L12 0ZM8 18C4.69 18 2 15.31 2 12C2 8.69 4.69 6 8 6C11.31 6 14 8.69 14 12C14 15.31 11.31 18 8 18Z" />
            </svg>
          </Link>
          <Link exact href={routes.SETTINGS} activeClassName="active" className="tracking-wider font-normal" style={{ fontSize: "9.8px" }}>Settings</Link>
        </div>
        <div className="flex flex-col md:py-4 py-3 items-center">
          <Link exact href={routes.HOME} className="my-1 colorGray">
            <svg className="relative -top-1" width="24" height="20" viewBox="0 0 19 12" fill="#5D6E81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 12H9.5V10H0.5V12ZM0.5 7H18.5V5H0.5V7ZM0.5 2H18.5V0H0.5V2Z" />
            </svg>
  
          </Link>
          <Link exact href={routes.HOME} activeClassName="active" className="tracking-wider font-normal" style={{ fontSize: "9.8px" }} >Menu</Link>
        </div>
      </nav>
    )
  }
  
  export default BottomBar