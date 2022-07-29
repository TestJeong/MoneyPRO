import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { REQUEST_KOREAN_STOCK_API } from "utils/api/get_api";

const Hoho: NextPage = () => {
  const [stockName, setStockName] = useState("");
  const { isLoading, data, isSuccess } = useQuery(
    ["koreanStockList", stockName],
    () => REQUEST_KOREAN_STOCK_API(stockName)
  );

  useEffect(() => {
    if (!isLoading) console.log("?????", data);
  }, [isLoading]);

  return (
    <div>
      <div className="w-full bg-slate-300">
        <input
          type="text"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
        />
      </div>

      <div className="overflow-scroll max-h-[18rem] px-[1rem]">
        {isSuccess &&
          data.map((item) => (
            <div
              key={item.id}
              className="text-left py-2 hover:opacity-50"
              onClick={() => {}}
            >
              <span>{item.school_address}</span> <span>{item.stock_name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hoho;
