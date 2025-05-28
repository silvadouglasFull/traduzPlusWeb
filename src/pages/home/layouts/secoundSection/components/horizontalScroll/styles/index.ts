import { colors } from "@flavor/constants/colors";
import type { Styles } from "@pagesHome/layouts/secoundSection/components/horizontalScroll/styles/types";
const horizontalSectionStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    padding: '1rem',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // Internet Explorer e Edge antigos
};
const arrowButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: `${colors.OxfordBlue}`,
    border: '1px solid #ddd',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
};
export const wrap: React.CSSProperties = {
    position: 'relative',
}
export const styles: Styles = {
    horizontalSection: horizontalSectionStyle,
    arrowButtonStyle: arrowButtonStyle,
    wrap: wrap
}