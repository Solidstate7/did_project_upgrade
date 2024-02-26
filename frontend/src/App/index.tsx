import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "../components/organisms/Header";
import Main from "../pages/Main";
import View from "../pages/View";
import ProductWrite from "../pages/ProductWrite";
import MyStoreList from "../pages/MyStoreList";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<View />} />
        <Route path="/product" element={<ProductWrite />} />
        <Route path="/store" element={<MyStoreList />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
