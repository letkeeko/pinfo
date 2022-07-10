type SeoStoreTypes = {
  title_tag: string;
  meta_description: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  handleChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  [key: string]: any;
};

export default SeoStoreTypes;
