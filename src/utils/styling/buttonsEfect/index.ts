import type { IButtonsEfect } from "@utils/styling/buttonsEfect/IButtonsEfect";
import type { ButtonState, InnerHtml } from "@utils/styling/buttonsEfect/types";
export class StatefulButtonService implements IButtonsEfect {
    private readonly buttons: NodeListOf<HTMLButtonElement> | null
    constructor(buttons: NodeListOf<HTMLButtonElement> | null) {
        this.buttons = buttons
    }

    public initialize(): void {
        if (this.buttons?.length) {
            this.buttons.forEach(button => {
                button.addEventListener("click", () => {
                    this.setState(button, "loading");

                    setTimeout(() => {
                        this.setState(button, "reset");
                    }, 2000);
                });
            });
        }
    }

    private setState(button: HTMLButtonElement, state: ButtonState): void {
        switch (state) {
            case "loading":
                button.disabled = true;
                button.dataset.originalText = button.innerHTML;
                const innerHTML: InnerHtml = "Loading"
                button.innerHTML = innerHTML;
                break;

            case "reset":
                button.disabled = false;
                button.innerHTML = button.dataset.originalText ?? "Submit";
                break;
        }
    }
}
