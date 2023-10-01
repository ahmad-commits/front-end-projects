import {Link, useMatch, useResolvedPath} from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav className="flex pc:flex-row mobile:flex-col justify-between gap-2 p-4 border-b border-slate-500">
      <Link to="/" className="text-slate-700 text-center font-bold text-xl ">
        NewBook
      </Link>
      <ul className="flex pc:flex-row mobile:flex-col mobile:text-xl mobile:text-center mobile: list-none gap-3 text-slate-700 text-sm">
        <li className="py-1 hover:text-sky-300 transition">
          <CustomLink to="/help">Help</CustomLink>
        </li>
        <li className="py-1 hover:text-sky-300 transition">
          <CustomLink to="/sign_up">Log in</CustomLink>
        </li>
        <li className="rounded px-3 py-1 bg-sky-600 text-neutral-50 hover:bg-sky-500 transition">
          <button className="">Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true});
  return (
    <li>
    <Link to={to} {...props}>
      {children}
      </Link>
    </li>
  );
}

export default Navbar;
