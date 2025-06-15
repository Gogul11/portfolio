
const SideBarFields = ({className, onClickFunc, icon, content}) => {
    return(
        <div>
            <button
                className={className}
                onClick={onClickFunc}
            >
                {icon}
                <p
                    className='ml-8 text-white'
                >{content}</p>
            </button>
        </div>
    )
}

export default SideBarFields