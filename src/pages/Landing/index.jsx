import {React, useState} from "react";
import {Button, Card, Col, Form, Input, Space, Row, Tag} from "antd";
import "./index.less";
import GridView from "../../components/GridView";
import {useGistsList} from "./queries";
import FileType from "../../components/FileType";
import Fork from "../../components/Fork";
import {PAGINATION_CONSTANT} from "../../constants/constant";
import {dummyData} from "./dummyData";
const {Search} = Input;

function Landing() {
  const [searchText, setSearchText] = useState("");
  const [payload, setPayload] = useState({
    // page: PAGINATION_CONSTANT.PAGE_NUMBER,
    // per_page: PAGINATION_CONSTANT.PAGE_SIZE,
  });
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

  return (
    <div className='main-container'>
      <h1>The Collective Gists Test</h1>
      <Row align='middle' justify='space-between'>
        <Col sm={24} xs={24} md={24} xl={24} lg={24}>
          <p className='description'>
            The Gists API enables the authorized user to list, create, update
            and delete the public gists on GitHub.
          </p>
        </Col>
        <Col sm={24} xs={24} md={24} xl={24} lg={24}>
          <Search
            placeholder='Search...'
            onSearch={(searchText) => setSearchText(searchText)}
            allowClear
            enterButton
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
          tableKey='table-container'
          rowKey='id'
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
