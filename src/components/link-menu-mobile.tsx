import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface LinkMenuMobileProps {
  href: string;
  title: string;
  handleClose: () => void;
}

export default function LinkMenuMobile(props: LinkMenuMobileProps) {
  const { href, title, handleClose } = props;
  return (
    <Link
      href={href}
      onClick={handleClose}
      className="flex justify-between items-center p-3 pl-8 select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      {title}
      <ChevronRight strokeWidth={2} width={16} height={16} />
    </Link>
  );
}
