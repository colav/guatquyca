import React from "react";

/* Libraries */
import AnyChart from "anychart-react";
import anychart from "anychart";

/* Components */
import InfoButton from "../InfoButton";
import ExportSVGAnyChart from "../ExportSVGAnyChart";
import ExportXLSXAnyChart from "../ExportXLSXAnyChart";

/* UI Library Components */
const Card = require("antd/lib/card").default;
const Col = require("antd/lib/col").default;

const LineChart = ({ rawData, id = "", infoText }) => {
  const data = [];
  for (const key in rawData) {
    data.push({ x: key, value: rawData[key] });
  }
  const chart = anychart.line();
  let series = chart.line(data);
  series.markers(true);
  series.stroke("3 #ABF370");
  chart.xAxis().labels().fontSize(11);
  chart.xAxis().labels().rotation(-90);
  chart.xAxis().labels().fontWeight(600);
  chart.yAxis().labels().fontWeight(600);
  chart.yAxis().title("(USD)");
  chart.xAxis().title("Año");
  chart
    .tooltip()
    .format("Total: {%value}{numDecimals:2,groupsSeparator:\\,} USD");
  chart.background().stroke("#EAEAE6");

  return (
    <Col xs={24} lg={16}>
      <Card
        size="small"
        title="Pagos de APC por año"
        bodyStyle={{ padding: "10px" }}
        extra={[
          <ExportXLSXAnyChart key={0} chart={chart} />,
          <ExportSVGAnyChart key={1} chart={chart} />,
          <InfoButton key={2} text={infoText} title="Pagos de APC por año" />,
        ]}
      >
        <Card
          bordered={false}
          type="inner"
          style={{ width: "100%", height: "400px" }}
          cover={
            <div
              id={`${id}Line_ChartContainer`}
              style={{ width: "100%", height: "400px" }}
            >
              <AnyChart
                container={`${id}Line_ChartContainer`}
                instance={chart}
              />
            </div>
          }
        ></Card>
      </Card>
    </Col>
  );
};

export default LineChart;
