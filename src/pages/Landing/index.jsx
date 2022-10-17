import { Col, Input, Row } from "antd";
import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FileType from "../../components/FileType";
import Fork from "../../components/Fork";
import GridView from "../../components/GridView";
import "./index.less";
import { useGistsList } from "./queries";

const { Search } = Input;

function Landing() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchValue = new URLSearchParams(search).get("search");
  const [searchText, setSearchText] = useState(searchValue);
  const [payload, setPayload] = useState({
    // page: PAGINATION_CONSTANT.PAGE_NUMBER,
    // per_page: PAGINATION_CONSTANT.PAGE_SIZE,
  });

  useEffect(() => {
    if (!Boolean(searchValue)) {
      navigate("/");
    }
  }, [searchValue]);

  const {
    data: list = [],
    isLoading,
    isFetching,
  } = useGistsList(payload, searchText);

  let GistsColumns = [
    {
      title: "FILE TYPE",
      key: "files",
      dataIndex: "files",
      align: "center",

      render: (files) => {
        return <FileType files={files} />;
      },
    },
    {
      title: "FORK",
      key: "id",
      dataIndex: "id",
      align: "center",
      render: (id) => {
        return <Fork id={id} />;
      },
    },
  ];
  const onPressEnter = ({ target: { value } }) => {
    navigate(`/?search=${value}`);
    setSearchText(value);
  };
  const onSearch = (text) => {
    navigate(`/?search=${text}`);
    setSearchText(text);
  };

  return (
    <div className="main-container">
      <h1>The Collective Gists Test</h1>
      <Row align="middle" justify="space-between">
        <Col sm={24} xs={24} md={24} xl={24} lg={24}>
          <p className="description">
            The Gists API enables the authorized user to list, create, update
            and delete the public gists on GitHub.
          </p>
        </Col>
        <Col sm={24} xs={24} md={24} xl={24} lg={24}>
          <Search
            placeholder={searchText ? searchText : "Search..."}
            onSearch={onSearch}
            allowClear
            enterButton
            onPressEnter={onPressEnter}
          />
        </Col>
      </Row>
      {searchText && (
        <GridView
          columns={GistsColumns}
          data={list}
          isLoading={isLoading}
          tableLayout={"auto"}
          currentPage={payload.page}
          pageSize={payload.per_page}
          totalCount={30}
          isFetching={isFetching}
          tableKey="table-container"
          rowKey="id"
          showPagination={false}
          onPaginate={(page, pageSize) =>
            setPayload({
              ...payload,
              page,
            })
          }
        />
      )}
    </div>
  );
}

export default Landing;
