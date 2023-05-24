import React, { useEffect, useState } from "react";

/* Components */
import ErrorWarning from "./ErrorWarning";
import LoadingCard from "./LoadingCard";
import AuthorsHorizontalList from "./AuthorsHorizontalList";
import DocumentModal from "./DocumentModal";
import DownloadCSVButton from "./DownloadCSVButton";
import DownloadJSONButton from "./DownloadJSONButton";
import OpenAccessStatus from "./OpenAccessStatus";
import SortProduction from "./SortProduction";

/* Icons */
import { CitationsIcon } from "../media/icons/citations";
import { CalendarOutlined, ReadOutlined } from "@ant-design/icons";

/* UI Library Components */
import { Card, List, Modal, Pagination, Space, Typography } from "antd";

/* Utilities */
import { APIRequest } from "../apis/clustercien";
import { useLocation, useSearchParams } from "react-router-dom";

/* UI Library Sub-components */
const { Link } = Typography;

const DocumentList = () => {
  const location = useLocation();
  const [pagination, setPagination] = useState({ page: 1, max: 10 });
  const [state, setUrl] = APIRequest(
    `${location.pathname}${location.search}&page=${pagination.page}&max_results=${pagination.max}`.replace(
      "type=institution&",
      ""
    )
  );

  useEffect(() => {
    setUrl(
      `${location.pathname}${location.search}&page=${pagination.page}&max_results=${pagination.max}`.replace(
        "type=institution&",
        ""
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const docInfo = (title, id, status) => {
    Modal.info({
      width: "1200px",
      title: [
        title,
        " ",
        status ? <OpenAccessStatus status={status} key="0" /> : "",
      ],
      closable: true,
      icon: null,
      okText: "Cerrar",
      content: <DocumentModal documentID={id} />,
      onOk() {},
    });
  };

  const onPageChange = ({ page, pageSize }) => {
    setPagination({ page: page, max: pageSize });
  };

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return (
      <Card
        style={{ marginTop: "15px" }}
        headStyle={{ backgroundColor: "#003e65", color: "white" }}
        title={"Artículos"}
        size="small"
      >
        <LoadingCard />
      </Card>
    );
  }
  return (
    <Card
      style={{ marginTop: "15px" }}
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      title={"Artículos"}
      size="small"
      extra={
        state.data.total_results === 1
          ? `${state.data.total_results} resultado`
          : `${state.data.total_results} resultados`
      }
    >
      <List
        itemLayout="vertical"
        size="small"
        footer={
          <div style={{ textAlign: "end" }}>
            <Pagination
              size="small"
              total={state.data.total_results}
              onChange={(page, pageSize) =>
                onPageChange({
                  page,
                  pageSize,
                })
              }
              current={pagination.page}
              pageSize={pagination.max}
            />
          </div>
        }
        dataSource={state.data.data}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CalendarOutlined)}
                Publicado: {item.year_published}
              </Space>,
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CitationsIcon)}
                {item.citations_count[0].count === 1
                  ? `${item.citations_count[0].count} citación`
                  : `${item.citations_count[0].count} citaciones`}
              </Space>,
            ]}
          >
            <List.Item.Meta
              title={[
                <Link
                  key="1"
                  onClick={() =>
                    docInfo(item.title, item.id, item.open_access_status)
                  }
                >
                  {item.title}
                </Link>,
                " ",
                item.open_access_status ? (
                  <OpenAccessStatus status={item.open_access_status} key="2" />
                ) : (
                  ""
                ),
              ]}
              description={
                <div>
                  <ReadOutlined /> {item.source.name}
                </div>
              }
            />
            Autores: {AuthorsHorizontalList(item.authors)}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default DocumentList;

/* 

  if (state.data.data.length && state.data.data[0].title) {
    return; 
      <Card
        size="small"
        extra={[
          data.total_results ? data.total_results + " resultado(s)" : null,
          <SortProduction
            key="1"
            parsedURL={parsedURL}
            setProductionURL={setProductionURL}
            setUrl={setUrl}
            core={core}
          />,
        ]}
        actions={
          data.total_results > 0
            ? [
                <DownloadCSVButton key="1" parsedURL={parsedURL} />,
                <DownloadJSONButton key="2" parsedURL={parsedURL} />,
              ]
            : ""
        }
        title={"Artículos"}
      >
        <div id="productionListContainer">
          <List
            itemLayout="vertical"
            size="small"
            pagination={{
              size: "small",
              position: "bottom",
              total: data.total_results,
              onChange: (page, pageSize) =>
                onPageChange({
                  page,
                  pageSize,
                  setCurrentURL: core.setCurrentURL,
                }),
              hideOnSinglePage: true,
              current: parseInt(parsedURL.page),
              pageSize: parsedURL.max,
            }}
            dataSource={data.data}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <Space style={{ fontSize: 18 }}>
                    {React.createElement(CalendarOutlined)}
                    Publicado: {item.year_published}
                  </Space>,
                  <Space style={{ fontSize: 18 }}>
                    {React.createElement(CitationsIcon)}
                    {item.citations_count === 1
                      ? `${item.citations_count} citación`
                      : `${item.citations_count} citaciones`}
                  </Space>,
                ]}
              >
                <List.Item.Meta
                  title={[
                    <Link
                      key="1"
                      onClick={() =>
                        docInfo(item.title, item.id, item.open_access_status)
                      }
                    >
                      {item.title}
                    </Link>,
                    " ",
                    item.open_access_status ? (
                      <OpenAccessStatus
                        status={item.open_access_status}
                        key="2"
                      />
                    ) : (
                      ""
                    ),
                  ]}
                  description={
                    <div>
                      <ReadOutlined /> {item.source.name}
                    </div>
                  }
                />
                Autores:{" "}
                {AuthorsHorizontalList(item.authors, core.setCurrentURL)}
              </List.Item>
            )}
          ></List>
        </div>
      </Card>
    );
    */