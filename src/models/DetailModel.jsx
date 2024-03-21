import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    //coin verilerini class'tan alınacak örneğin içine gönder
    this.coin = coin;
    console.log(coin);

    // detay verilerinden oluşan bir dizi
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdEventAvailable />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <MdPriceChange />,
        label: "24s Değişim(%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <FaPercent />,
        label: "24s Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Fiyat",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "Yellow",
        },
      ],
    };

    //grafik için kullanılacak veri
  }

  static async getCoin(id) {
    const res = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),
      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: res[0].data.data,
      history: res[1].data.data,
    };
  }
}
