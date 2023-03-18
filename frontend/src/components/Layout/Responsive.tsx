interface IconButtonProps {
    children: React.ReactNode;
    addClass?: string;
}

const ResponsiveSection:React.FC<IconButtonProps> = ({children, addClass=""}) => {
    return (
        <>
        <section className={`flex px-2 lg:px-12 small:px-64  py-2.5 max-w-screen ${addClass} delay-150 duration-300 ease-linear transition-all `}>
            {children}
        </section>
        </>
    )
}

export default ResponsiveSection