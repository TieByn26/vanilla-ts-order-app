export const validateInput = (container: HTMLElement): void => {
    const inputs: NodeListOf<HTMLInputElement> = container.querySelectorAll('input');

    inputs.forEach((input: HTMLInputElement) => {
        if (!["price", "amount", "sales","sku","barcode","quantity"].some(keyword => input.name.includes(keyword))) {
            return;
        }        
        input.addEventListener('keydown', (event: KeyboardEvent): void => {
            const allowedKeys: string[] = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];

            if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
                event.preventDefault();
            }
        });

        input.addEventListener('input', (event: Event): void => {
            const target = event.target as HTMLInputElement;
            target.value = target.value.replace(/\D/g, '');
        });
    });
};
