import { Link, useMatch, useResolvedPath } from "react-router-dom";

function HeaderCustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{color: match ? '#ffffff' : '#22c55e',fontWeight: match ? 'bold' : 
           '',fontSize: '20px',fontFamily: 'Outfit' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
}

export default HeaderCustomLink;