import React, { useState, useEffect } from "react";

/* Components */
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";
import PieChart from "./PieChart";
import TreemapChart from "./TreemapChart";

/* UI Library Components */
import { Card, Select } from "antd";

/* Utilities */
import { APIRequest } from "../../apis/clustercien";
import { useLocation } from "react-router-dom";

const PLOTLIST = [
  {
    label: "20 palabras más usuales en los títulos de la producción",
    value: "title_words",
  },
  { label: "Citas acumuladas de las facultades", value: "citations_faculty" },
  {
    label: "Cantidad de artículos de las facultades",
    value: "products_faculty",
  },
  { label: "Gastos de APC proyectado según facultad", value: "apc_faculty" },
  { label: "Índice H de las facultades", value: "h_faculty" },
  {
    label: "Citas acumuladas de los departamentos",
    value: "citations_department",
  },
  {
    label: "Cantidad de artículos de los departamentos",
    value: "products_department",
  },
  {
    label: "Gastos de APC proyectado según departamento",
    value: "apc_department",
  },
  { label: "Índice H de los departamentos", value: "h_department" },
  {
    label: "Citas acumuladas de los grupos de investigación",
    value: "citations_group",
  },
  {
    label: "Cantidad de artículos de los grupos de investigación",
    value: "products_group",
  },
  {
    label: "Gastos de APC proyectado según grupo de investigación",
    value: "apc_group",
  },
  { label: "Índice H de los grupos de investigación", value: "h_group" },
  {
    label: "Cantidad de artículos según editorial",
    value: "products_publisher",
  },
  { label: "Número de artículos según temas", value: "products_subject" },
  {
    label: "Número de productos según base de datos de origen",
    value: "products_database",
  },
  { label: "Número de artículos según su acceso", value: "products_oa" },
  {
    label: "Número de artículos según tipo de acceso abierto",
    value: "products_oa",
  },
  { label: "Cantidad de productos según sexo", value: "products_sex" },
  {
    label: "Cantidad de productos según rango de edad de los autores",
    value: "products_age",
  },
  {
    label: "Cantidad de artículos según categoría asignada en el Scienti",
    value: "scienti_rank",
  },
  {
    label:
      "Cantidad de artículos en revistas rankeadas en cuartiles de Scimago",
    value: "scimago_rank",
  },
  {
    label:
      "Cantidad de artículos publicados en revistas de la misma institución a la que pertenece el autor",
    value: "published_institution",
  },
];

const PieChartHandler = () => {
  const location = useLocation();
  const [selectedPlot, setSelectedPlot] = useState("citations_faculty");
  const [state, setUrl] = APIRequest(
    `${location.pathname}${location.search}&plot=${selectedPlot}`
  );

  useEffect(() => {
    setUrl(`${location.pathname}${location.search}&plot=${selectedPlot}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlot]);

  const handleChange = (value) => {
    setSelectedPlot(value);
  };

  return (
    <Card
      size="small"
      title="Pendiente"
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      bodyStyle={{ padding: "10px", height: "420px" }}
      hoverable
      extra={
        <Select
          size="small"
          defaultValue={selectedPlot}
          style={{
            width: 420,
          }}
          onChange={handleChange}
          options={PLOTLIST}
        />
      }
    >
      <div className="chart">
        {state.isLoading ? (
          <LoadingCard height={"100%"} />
        ) : state.data.plot.length > 5 ? (
          <TreemapChart data={state.data.plot} />
        ) : (
          <PieChart data={state.data.plot} />
        )}
        {state.isError ? <ErrorWarning /> : ""}
      </div>
    </Card>
  );
};

export default PieChartHandler;