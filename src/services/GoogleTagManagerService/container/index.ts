import { gtag } from "@flavor/constants/gtag"
import { GoogleTagManagerService } from "@services/GoogleTagManagerService"
export const container = () => {
    return new GoogleTagManagerService(gtag)
}