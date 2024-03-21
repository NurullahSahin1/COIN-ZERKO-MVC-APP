import React from "react";
import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const MainView = ({ coins, setPage }) => {
  const navigate = useNavigate();
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Hoş Geldiniz, Coin Listesi</span>
      </h4>

      <p>
        CoinZerko'nun amacı size dünya çapında gerçekleşen kripto para
        ticaretinin en gerçek zamanlı görünümünü sunmaktır. Kripto para
        meraklılarının ihtiyaçlarını karşılamak için tasarlanan CoinZerko,
        kripto para piyasalarının benzersiz taleplerine uyum sağlıyor.
      </p>
      <div className="d-flex gap-4 justify-content-around my-5">
        {coins.slice(0, 3).map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>

      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <th>#</th>
          <th>Coin</th>
          <th>Fiyat</th>
          <th>Market Hacmi</th>
          <th>İşlem Hacmi</th>
          <th>% Değişim(24s)</th>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td
                className={Number(coin.changePercent24Hr) >= 0 ? "up" : "down"}
              >
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center my-5">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="more-btn"
        >
          Daha Fazla
        </button>
      </div>
    </div>
  );
};

export default MainView;
