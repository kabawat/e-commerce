import Link from 'next/link'
import WebLangData from '@/data/language'
import LanguageDropDown from './languageDropDown'

// export const langContant = createContext()
const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="header-left">
                        <div className="header-card" id='card-item'>
                            <div className='card-item'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" width='100%' height="100%"><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /></svg>
                                </span>
                                +91 6377576922
                            </div>
                            <div className='card-item'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' className="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112" /></svg>
                                </span>
                                itrust@gmail.com
                            </div>
                        </div>
                        <div className="header-card" id='header-logo'>
                            <Link href='/'>
                                <div className="header-logo">
                                    iTrust
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-link-btn" id=''>
                            <a href="#" className='header-link'>Theme FAQ"s</a>
                            <a href="#" className='header-link'>Need Help?</a>
                        </div>

                        {/* language section  */}
                        <div className="header-com">
                           <LanguageDropDown WebLangData={WebLangData}/>
                           <LanguageDropDown WebLangData={WebLangData}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default Header