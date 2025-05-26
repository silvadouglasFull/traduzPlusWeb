import { colors } from "@flavor/constants/colors";
import type { Styles } from "@pagesHome/styles/types";
export const styles: Styles = {
    bgPrimaryGradient: {
        backgroundRepeat: 'repeat-x',
        backgroundImage: `linear-gradient(24deg, ${colors.infiniteNight}, ${colors.OxfordBlue})`,
        color: '#fff',
    },
    bgGray100: {
        backgroundColor: '#f5f6fa',
    },
    container: {
        overflowX: 'hidden'
    }
};