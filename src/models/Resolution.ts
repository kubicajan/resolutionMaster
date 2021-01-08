export enum cResolution {
  id = "id",
}

export interface resolutionInterface {
  id: string;
}

export const Resolution = (): resolutionInterface => ({
  id: "",
});
