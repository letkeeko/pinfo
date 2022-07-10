import React from "react";

type AccountStoreProps = {
  user: {
    name: string;
    category: string;
    [key: string]: any;
  };
  handleChange: (e: React.ChangeEvent) => void;
};

export default AccountStoreProps;
