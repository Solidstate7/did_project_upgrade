import React, { useState } from "react";
import { useMutation } from "react-query";
import RegistrationNFT from "../organisms/RegistrationNFT";
import Button from "../atoms/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ProductData {
  title: string;
  content: string;
  image: string;
  price: string;
  signature: string;
}

const RegistSellNft: React.FC = () => {
  const [productData, setProductData] = useState({
    title: "",
    content: "",
    image: "",
    price: "0",
    signature: "",
  });

  const saveProductDataToServer = async (data: ProductData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/product",
        data
      );
      return response.data.id;
    } catch (error) {
      console.error("Error saving product data:", error);
      throw new Error("Failed to save product data");
    }
  };

  const navigate = useNavigate();

  const saveProductData = useMutation((newData: ProductData) =>
    saveProductDataToServer(newData)
  );

  const handleSave = () => {
    if (
      !productData.title ||
      !productData.content ||
      !productData.image ||
      !productData.price ||
      !productData.signature
    ) {
      alert("모든 입력 필드를 채워주세요.");
      return;
    }
    saveProductData.mutate(productData, {
      onSuccess: (id: string) => {
        navigate(`/product/${id}`);
      },
    });

    console.log(productData);
  };

  const handleNftDataChange = (newData: ProductData) => {
    setProductData(newData);
  };

  return (
    <div>
      <div className="flex flex-col justify-center w-[500px] mx-[auto]">
        <RegistrationNFT onChange={handleNftDataChange} />
        <div className="flex flex-row mx-[auto] p-4 gap-x-1.5">
          <Button variant="iconTextBtn" size="mdl" label="최소" />
          <Button
            variant="sendBtn1"
            size="mdl"
            label="저장"
            onClick={handleSave}
            disabled={saveProductData.isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistSellNft;
