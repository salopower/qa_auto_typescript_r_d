export interface Disableable {
    isDisabled: boolean;
    disable(): void;
    enable(): void;
}
