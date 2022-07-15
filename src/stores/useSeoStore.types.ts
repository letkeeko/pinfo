type SeoStoreTypes = {
  title_tag: string;
  meta_description: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  handleChange: (key: string, value: string) => void;
  [key: string]: any;
};

export default SeoStoreTypes;
