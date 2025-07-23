import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  title: string;
  links?: { href: string; label: string }[];
}

const Navbar = ({title, links = []} : NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="container max-w-4xl mx-auto px-6 py-4 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <h3 className="text-xl font-semibold">{title}</h3>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`hover:text-secondary font-medium nav-link ${link.href === pathname ? 'text-secondary' : ''}`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;