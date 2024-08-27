import parsePhoneNumber from 'libphonenumber-js';
import Image from 'next/image';
import Link from 'next/link';
import dp from '../../public/1.jpeg';

export default function Header() {
  const phoneNumber = parsePhoneNumber('+18482358321');

  return (
    <div className="to flex flex-col flex-wrap justify-between bg-gradient-to-r from-red-500 via-purple-500 to-red-900 px-4 py-8 opacity-100 sm:px-8 lg:px-4">
      <div className="w-full justify-between space-y-3 text-center sm:flex sm:flex-row sm:flex-wrap sm:items-center lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="shadow-xs font-serif text-3xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl">
          Darshan Patel
        </div>
        <div className="flex justify-center">
          <Image
            src={dp}
            alt="Vercel Logo"
            className="h-72 w-72 rounded-full object-cover shadow-inner sm:max-w-md"
            width={100}
            height={20}
            priority
          />
        </div>
        <div className="flex flex-col items-center space-y-2 font-serif">
          <div className="sm:text-m md:text-l opacity-70 lg:text-xl">Contact Information</div>
          <div className="sm:text-s md:text-m lg:text-l flex justify-between text-center sm:flex-wrap">
            <i className="fa-light fa-user"></i>
            <div>
              <span className="block">Edison, NJ, USA</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between text-center">
            <i className="fa-light fa-user"></i>
            <a href="mailto:patel7darshan97@gmail.com">
              <h3>patel7darshan97@gmail.com</h3>
            </a>
          </div>
          {phoneNumber && (
            <div className="flex justify-between text-center">
              <i className="fa-light fa-phone"></i>
              <Link href="tel:18482358321">
                <h3>{phoneNumber.formatInternational()}</h3>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
