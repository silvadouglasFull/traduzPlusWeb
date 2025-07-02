import { useGetLanguage } from "@components/navbarPublic/languageDropdown/button/title/hooks/useGetLabelLanguage";
import { useLanguage } from "@context/language/hooks";
export const Title = () => {
    const { icon } = useLanguage()
    const { label } = useGetLanguage()
    if (icon) {
        return (<span className="text-light">
            {icon} {label}
        </span>)
    }
    //🌐 Languages
    return (
        <small className="text-light">
            🌐 {label}
        </small>
    )
}