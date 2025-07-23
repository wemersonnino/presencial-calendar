import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { CirclesBackground } from '@/components/shared/CirclesBackground';

export const AuthLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <main className="flex min-h-full overflow-hidden py-28 pt-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-6 lg:px-4">
        <Link href="/" aria-label="Home">
          <Logo className="mx-auto h-10 w-auto" />
        </Link>
        <div className="relative mt-16 lg:mt-12">
          <CirclesBackground
            width="1090"
            height="1090"
            className="absolute -top-9 left-1/2 -z-10 h-auto -translate-x-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30 lg:-top-7 lg:h-[788px]"
          />
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">{title}</h1>
          {subtitle && <p className="mt-3 text-center text-lg text-gray-600">{subtitle}</p>}
        </div>
        <div className="rounded-5xl -mt-4 flex-none bg-white p-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 lg:my-6 lg:flex-auto lg:px-4 lg:py-10">
          {children}
        </div>
      </div>
    </main>
  );
};
