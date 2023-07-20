import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./berChartBox.scss";
type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
const BerChartBox = (props: Props) => {
  const { title, color, dataKey, chartData } = props;
  return (
    <div className="berChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BerChartBox;
