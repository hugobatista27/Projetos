import './header.css';
import { Logo } from "./components/logo/Logo";
import { User } from "./components/user/User";

export const Header = () => {
  return (
    <header>
        <Logo/>
        <User/>
    </header>
  )
}