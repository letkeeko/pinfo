type PinProps = {
  id: number;
  title: string;
  description: string;
}[];

export type PinsStoreProps = {
  pins: PinProps;
  deletePrompt: number[];
  expandPins: number[];
  handleChangePin: (pins: PinProps) => void;
  handleAddPin: () => void;
  handleDeletePin: (id: number) => void;
  handleDeletePrompt: (id: number) => void;
  handleExpandPins: (id: number) => void;
};
