import React from "react";

/* Components */
import ErrorWarning from "./ErrorWarning";
import ExternalURL from "./ExternalURL";
import ExternalProfiles from "./ExternalProfiles";

/* Hooks */
import { URLBuilder } from "../utils/URLBuilder";

/* UI Library Components */
import { Avatar, Card, Col, Row, Typography } from "antd";

/* Icons */
import { ReadOutlined } from "@ant-design/icons";

/* Utilities */
import { APIRequest } from "../apis/colav";

/* UI Library Sub-components */
const { Meta } = Card;

const CommonTitleCard = () => {
  const setParams = { section: "info" };
  const URL = URLBuilder(setParams);

  const [state] = APIRequest(URL);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return (
      <Col span={24}>
        <Card className="pattern">
          <div style={{ height: "142px" }} />
        </Card>
      </Col>
    );
  }
  return (
    <Col span={24}>
      <Card className="pattern">
        <Meta
          avatar={
            <Avatar
              size={{ xs: 60, sm: 60, md: 150, lg: 150, xl: 150, xxl: 150 }}
              src={
                state.data.data.logo ? (
                  state.data.data.logo
                ) : (
                  <ReadOutlined style={{ color: "gray", fontSize: "40px" }} />
                )
              }
              style={{
                backgroundColor: "white",
                padding: 10,
                border: "1px solid lightgray",
              }}
            />
          }
          description={
            <>
              <Typography.Title level={2}>
                {state.data.data.name}{" "}
                {state.data.data.abbreviation
                  ? `(${state.data.data.abbreviation})`
                  : ""}
              </Typography.Title>
              <Row align={"top"} gutter={[30, 10]}>
                <Col xs={24} lg={6}>
                  {state.data.data.external_urls?.length ? (
                    <ExternalURL URLList={state.data.data.external_urls} />
                  ) : (
                    ""
                  )}
                  {state.data.data.external_ids?.length ? (
                    <ExternalProfiles idsList={state.data.data.external_ids} />
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default CommonTitleCard;
