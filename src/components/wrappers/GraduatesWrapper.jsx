import React from "react";

/* Charts */
import DoughnutChart from "../charts/DoughnutChart";
import MapChart from "../charts/MapChart";
import NetworkChart from "../charts/NetworkChart";
import WordCloudChart from "../charts/WordCloudChart";

/* Components */
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";
import SingleStatistic from "../SingleStatistic";

/* Utilities */
import history from "../../history";
import { APIRequest } from "../../apis/clustercien";
const queryString = require("query-string");

/* UI Library Components */
const Col = require("antd/lib/col").default;
const Row = require("antd/lib/row").default;

const GraduatesWrapper = () => {
  let parsedGlobalURL = queryString.parse(history.location.search);
  parsedGlobalURL["data"] = "graduates";
  const builtURL = `${history.location.pathname}?${queryString.stringify(
    parsedGlobalURL
  )}`;
  const [state] = APIRequest(builtURL);

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return (
      <Row gutter={[15, 15]}>
        <Col span={24}>
          <LoadingCard title={"Información de egresados"} height={"431px"} />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row gutter={[15, 15]}>
        <Col xs={24} lg={8}>
          <SingleStatistic
            data={state.data.data.papers_count}
            title="Producción total:"
            margin={15}
          />
          <DoughnutChart
            data={state.data.data.count_by_type}
            title="Egresados por tipo de organización"
            id="gra_ty_"
            height={409}
          />
        </Col>
        <MapChart
          rawData={state.data.data.geo}
          title="Pendiente"
          id="gra_in_"
          height={540}
        />
        <Col xs={24} lg={12}>
          <WordCloudChart
            data={state.data.data.word_cloud}
            title="Palabras"
            id="gra_in_"
          />
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <NetworkChart
            data={state.data.data.countries_network}
            title="Red de coautoría - Países"
            id="gra_co_"
            height={400}
          />
        </Col>
        <Col xs={24}>
          <NetworkChart
            data={state.data.data.institutions_network}
            title="Red de coautoría - Instituciones"
            id="gra_in_"
            height={500}
          />
        </Col>
      </Row>
    );
  }
};

export default GraduatesWrapper;
