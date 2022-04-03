import Link from "next/link"
import { Nav, NavUL, NavLi, NavA } from "./style"

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavUL>
                    <NavLi>
                        <Link href="/" passHref>
                            <NavA>home</NavA>
                        </Link>
                    </NavLi>
                    <NavLi>
                        <Link href="/models" passHref>
                            <NavA>models</NavA>
                        </Link>
                    </NavLi>
                </NavUL>
            </Nav>
        </>
    )
}