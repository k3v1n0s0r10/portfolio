import { ChangeEvent, useState } from "react";

const useForm = (initialState: any) => {
  const [data, setData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((oldData: any) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setData(initialState);
  };

  return [data, handleChange, clearForm];
};

export default useForm;
