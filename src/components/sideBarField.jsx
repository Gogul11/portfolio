import { Link } from "react-router"

const SideBarFields = ({className, func, path, icon, content}) => {
    return(
        <div>
            <Link
              className={className}
              to={path}
              onClick={func}
            >
                {icon}
                <p
                    className='ml-8 text-white'
                >{content}</p>
            </Link>
        </div>
    )
}

export default SideBarFields