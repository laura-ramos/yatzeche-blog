import { linksMenu } from "@/data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {linksMenu.map((link) => (
        <Link key={link.href} href={link.href} className={`hover:text-secondary font-medium nav-link ${link.href === pathname ? 'text-secondary' : ''}`}>
          {link.label}
        </Link>
      ))}
    </>
  );
}