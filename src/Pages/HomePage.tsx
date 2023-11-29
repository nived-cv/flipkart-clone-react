import { Header } from "../Components/Header";
import { fetchedData } from "../CommonTypes/Types";
import { useEffect, useState } from "react";
import { useGetAll } from "../Api/getJsons";

const HomePage = () => {
  const [data, setData] = useState<fetchedData>({} as fetchedData);
  const { data: result } = useGetAll();
  useEffect(() => {
    setData(result);
  }, [result]);

  return (
    <div className="HomePage">{data && <Header header={data.header} />}</div>
  );
};
export default HomePage;
