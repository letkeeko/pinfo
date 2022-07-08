import { platformProps } from "./platformOptions";

type LinkProps = {
  label: string;
  value: string;
  url: string;
};

export type LinksStoreProps = {
  links: LinkProps[];
  deletePrompt: string[];
  invalidUrls: string[];
  isModalOpen: boolean;
  searchablePlatforms: platformProps;
  handleModal: (value?: boolean) => void;
  handleSearchPlatform: (value: string) => void;
  handleAddPlatform: (value: LinkProps) => void;
  handleChange: (value: string, url: string) => void;
  handleDeleteLink: (value: any) => void;
  handleDeletePrompt: (value: string) => void;
  handleUrlValidation: (value: string, url: string) => void;
  handleSaveToDb: (value?: LinkProps[]) => void;
};
