import React, { useEffect, useState } from "react";
import axios from "axios";
import LinkButton from "./buttons/LinkButton";
import { useRouter } from "next/navigation";

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
      image: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: {
      id: string;
      name: string;
      image: string;
    };
  };
}

const ZapTable = () => {
  const router = useRouter();
  const [zaps, setZaps] = useState<Zap[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setZaps(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="flex-1"></div>
        <div className="flex-1 text-lg font-semibold">Name</div>
        <div className="flex-1 text-lg font-semibold">Last Edit</div>
        <div className="flex-1 text-lg font-semibold">Running</div>
      </div>
      <div>
        {loading && "Loading..."}
        {!loading && (
          <div>
            {zaps.map((z, i) => (
              <div key={i} className="flex border-b border-t py-4">
                <div className="flex-1 flex">
                  <img
                    src={z.trigger.type.image}
                    className="w-[30px] h-[30px]"
                  />{" "}
                  {z.actions.map((x, j) => (
                    <img
                      key={j}
                      src={x.type.image}
                      className="w-[30px] h-[30px]"
                    />
                  ))}
                </div>
                <div className="flex-1">{z.id}</div>
                <div className="flex-1">Nov 13, 2023</div>
                {/* <div className="flex-1">{`${HOOKS_URL}/hooks/catch/1/${z.id}`}</div> */}
                <div className="flex-1">
                  <LinkButton
                    onClick={() => {
                      router.push("/zap/" + z.id);
                    }}
                  >
                    Go
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ZapTable;
