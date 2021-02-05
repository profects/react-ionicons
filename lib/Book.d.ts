export default Book;
declare function Book({ height, width, style, color, cssClasses, className, onClick }: {
    height?: number;
    width?: number;
    style?: {};
    color?: string;
    cssClasses?: string;
    className?: string;
    onClick?: () => any;
}): any;
