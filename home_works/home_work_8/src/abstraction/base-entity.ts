export abstract class BaseEntity {
    public id: number;

    public constructor(id: number) {
        this.id = id;
    }

    public abstract displayInfo(): void;
}
