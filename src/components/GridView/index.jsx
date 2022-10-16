import React from "react";
import PropTypes from "prop-types";
import {Col, Pagination, Row, Select, Space, Table} from "antd";

import "./grid-view.less";
import {PAGINATION_CONSTANT} from "../../constants/constant";
const GridView = (props) => {
  const {Option} = Select;

  const handleOnChange = (page, pageSize) => {
    const newOffset = pageSize * (page - 1);
    return props?.onPaginate(page, pageSize);
  };

  const handlePageSizeChange = (value) => {
    return props?.onPaginate(0, value);
  };

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  }
  const countOpt = [10, 20, 30];

  return (
    <div className={props?.tableKey}>
      <Table
        loading={props?.isFetching}
        className='gx-table-header-color ant-table-border'
        rowKey={props?.rowKey}
        columns={props.columns}
        tableLayout={props.tableLayout ? props.tableLayout : "fixed"}
        dataSource={props?.data}
        pagination={false}
      />

      {props?.showPagination && !props?.isLoading ? (
        <Row className='' justify='end' align='middle'>
          <Col sm={24} xs={24} md={12} xl={12} lg={12}>
            <Pagination
              itemRender={itemRender}
              current={props.currentPage}
              onChange={handleOnChange}
              hideOnSinglePage={true}
              pageSize={props.pageSize}
              total={props?.totalCount}
              defaultPageSize={PAGINATION_CONSTANT.PAGE_SIZE}
              showSizeChanger={props.totalCount > 1000}
            />
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

GridView.prototype = {
  columns: PropTypes.array,
  data: PropTypes.any,
  sort: PropTypes.any,
  rowKey: PropTypes.any,
};

export default GridView;
