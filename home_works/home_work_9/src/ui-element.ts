export abstract class UIElement {
    public constructor(public name: string) {}
    public abstract click(): void;
    public abstract getValue(): string;
}
