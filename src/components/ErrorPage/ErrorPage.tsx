import Image from 'next/image';
import Link from 'next/link';

import errorIcon from '../../../public/error.svg';

type Props = {
  isNotFoundPage?: boolean;
};

export const ErrorPage: React.FC<Props> = ({ isNotFoundPage = false }) => {
  const message = isNotFoundPage ? `Page not found` : `Something went wrong.`;

  const buttonText = isNotFoundPage ? `Go home` : `Refresh Page`;

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen p-8">
      <Image
        src={errorIcon}
        alt="Page not found"
        className="w-[150px] mb-5"
      />

      <p className="mb-8 text-2xl font-bold leading-[41px] tracking-tight text-center">
        {message}
      </p>

      <Link
        href="/"
        className="
  flex justify-center items-center w-full h-10 text-white text-sm font-semibold 
  bg-orange-500 rounded-lg border-none text-center hover:bg-orange-400 active:bg-orange-600
  md:w-[300px] md:h-[64px] md:text-lg lg:text-[24px]
"
      >
        {buttonText}
      </Link>
    </div>
  );
};
