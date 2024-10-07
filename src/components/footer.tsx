import Link from "next/link"
import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import {InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon} from "lucide-react";
import KlasseIcon from "../../public/klasse";

export default function Footer() {
    const year = new Date().getFullYear()
    const LINKS = [
        {href: "/", label: "Inicio"},
        {href: "/favorites", label: "Favoritos"},
        {href: "/about-us", label: "Nosotros"},
        {href: "/help", label: "Ayuda"},
    ];

    const SOCIAL = [
        {
            icon: <TwitterIcon strokeWidth="1"/>,
            link: "https://www.x.com/"
        },
        {
            icon: <InstagramIcon strokeWidth="1"/>,
            link: "https://www.instagram.com/"
        },
        {
            icon: <FacebookIcon strokeWidth="1"/>,
            link: "https://www.facebook.com/"
        },
        {
            icon: <YoutubeIcon strokeWidth="1"/>,
            link: "https://www.youtube.com/"
        }
    ]

    return (
        <footer className="bg-primary text-primary-foreground dark:bg-muted dark:text-foreground">
            <div className="w-full max-w-7xl mx-auto p-8 2xl:px-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center pt-8">
                    <div className="block sm:mb-0">
                        <Link className="w-24" href="/">
                            <KlasseIcon className="w-24"/>
                        </Link>
                    </div>

                    <nav className="w-full my-8 sm:my-0">
                        <ul className="flex flex-col justify-center sm:flex-row sm:gap-8 md:gap-12 sm:justify-end">
                            {LINKS.map((link) => (
                                <li key={link.href} className="w-full sm:w-auto">
                                    <Link
                                        href={link.href}
                                        className="block text-left py-3 border-b-[1px] text-muted-foreground sm:border-b-0 border-muted-foreground/30 hover:text-background dark:hover:text-foreground transition-colors duration-100"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div
                    className="flex flex-col text-left pt-4 space-y-0.5 text-muted-foreground text-sm sm:pt-8 sm:flex-row sm:justify-between">
                    <div className="order-2 mt-4 sm:order-1">
                        <p>Casi todos los derechos reservados &copy; {year}</p>
                        <p>Hecho por Keyner de Ávila</p>
                    </div>

                    <div className="order-1 flex space-x-4 sm:order-2 sm:space-x-8">
                        {SOCIAL.map((red, i) => {
                            return (
                                <a key={i} href={red.link} target="_blank" rel="noopener noreferrer">
                                    <Avatar key={i}>
                                        <AvatarFallback>
                                            {red.icon}
                                        </AvatarFallback>
                                    </Avatar>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}