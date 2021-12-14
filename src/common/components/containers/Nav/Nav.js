import { Link } from '../../blocks';

const Nav = () => {
    return(
        <nav>
            <Link id={"blog"} link={"https://github.com/sven-i-am"} content={"Blog"}/>
            <Link id={"src"} link={"https://github.com/StefanAmur"} content={"Sources"}/>
            <Link id={"repo"} link={"https://github.com/Leweyse/infinite"} content={"Github"}/>
            <Link id={"extra"} link={"https://github.com/jvondzerza"} content={"Extras"}/>
        </nav>
    )
}

export default Nav;