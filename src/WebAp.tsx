import { Header } from "./Components/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./Pages/HomePage";

const WebAp = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* {isSccess ? <Header header={mainObj.header} /> : "loading..."} */}
        {/* <Header header={data} /> */}
        <HomePage />
      </QueryClientProvider>
    </>
  );
};

export default WebAp;
