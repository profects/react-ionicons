export default QrCode;
declare function QrCode({ height, width, style, color, cssClasses, className, onClick }: {
    height?: number;
    width?: number;
    style?: {};
    color?: string;
    cssClasses?: string;
    className?: string;
    onClick?: () => any;
}): any;
