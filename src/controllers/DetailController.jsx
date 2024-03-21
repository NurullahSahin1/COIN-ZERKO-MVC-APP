import React, { useEffect, useState } from "react";
import DetailView from "../views/DetailView";
import { useParams } from "react-router-dom";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    DetailModel.getCoin(id).then((res) => setCoin(res));
  }, []);

  const model = new DetailModel(coin);
  console.log(model);
  return (
    <div>
      <DetailView model={model} />
    </div>
  );
};

export default DetailController;
