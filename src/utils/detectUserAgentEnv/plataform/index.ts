import { plataforms, ua } from "@utils/constants";
import type { IPlataform } from "@utils/detectUserAgentEnv/plataform/IPlataform";
import type { TPlataforms } from "@utils/detectUserAgentEnv/plataform/types";

export class PlataForms implements IPlataform {
    public get(): TPlataforms {
        const plataform = (Object.keys(plataforms) as Array<keyof typeof plataforms>).find(
            os => plataforms[os].test(ua)
        );
        return plataform
    }
}