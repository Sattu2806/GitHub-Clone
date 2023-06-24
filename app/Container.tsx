
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="max-w-[1440px] w-screen xl:px-20 md:px-8 sm:px-7 px-7 mx-auto"
        >{children}
        </div>
    )
}
export default Container