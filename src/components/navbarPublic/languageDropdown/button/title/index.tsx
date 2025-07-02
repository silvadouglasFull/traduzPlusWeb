import { Icon } from "@components/icons";
import { useLanguage } from "@context/language/hooks";

export const Title = () => {
    const { icon, } = useLanguage()
    if (icon) {
        return (<span className="text-light">
            {icon}
        </span>)
    }
    //🌐 Languages
    return (
        <span className="text-light">
            <Icon name="fa fa-language fa-1x" />
        </span>
    )
}