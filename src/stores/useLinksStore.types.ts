import React from "react";

export type platformOptionsProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
}[];

export type LinkFieldProps = {
  value: string;
  label: string;
  url: string;
  isDeletePrompted: boolean;
  handleDeletePrompt: (value: string) => void;
  handleDeleteLink: (value: string) => void;
};

export type LinkProps = {
  label: string;
  value: string;
  url: string;
};

export type LinksStoreProps = {
  links: LinkProps[];
  deletePrompt: string[];
  invalidUrls: string[];
  searchablePlatforms: platformOptionsProps;
  handleSearchPlatform: (value: string) => void;
  handleAddPlatform: (value: LinkProps) => void;
  handleChange: (value: string, url: string) => void;
  handleDeleteLink: (value: any) => void;
  handleDeletePrompt: (value: string) => void;
  handleUrlValidation: (value: string, url: string) => void;
  handleSaveToDb: (value?: LinkProps[]) => void;
};
