import BerChartBox from "../../component/berChartBox/BerChartBox";
import ChartBox from "../../component/chartBox/Chart";
import PaiChartBox from "../../component/paiChartBox/PaiChartBox";
import TopBox from "../../component/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/dummyData";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box_1">
        <TopBox />
      </div>
      <div className="box box_2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box_3">
        {" "}
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box_4">
        <PaiChartBox />
      </div>
      <div className="box box_5">
        {" "}
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box_6">
        {" "}
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box_7">box7</div>
      <div className="box box_8">
        {" "}
        <BerChartBox {...barChartBoxRevenue} />{" "}
      </div>
      <div className="box box_9">
        <BerChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};

export default Home;
