export default function Button({
    children,
    className,
    size,
    variant,
    ...props
}) {
    function combine(...classes) {
        return classes.filter((className) => className).join(" ");
    }
    return (
        <button
            className={`btn ${combine(size, variant, className)}`}
            {...props}
        >
            {children}
        </button>
    );
}
