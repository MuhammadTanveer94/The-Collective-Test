import React from "react";
import AntDesignOutlined from "@ant-design/icons";
import {Tag, Skeleton, Tooltip, Avatar} from "antd";

import {useForkList, useGistsList} from "../../pages/Landing/queries";
import "./index.less";

const Fork = ({files, id}) => {
  const {data: list = [], isLoading} = useForkList(id);
  return (
    <Skeleton loading={isLoading} active>
      <Avatar.Group
        maxCount={3}
        maxPopoverTrigger='click'
        size='default'
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
          cursor: "pointer",
        }}
      >
        {list.length > 0 ? (
          list.map((info, index) => {
            return (
              <Tooltip key={index} title={info?.owner?.login} placement='top'>
                <Avatar src={info?.owner?.avatar_url} />
              </Tooltip>
            );
          })
        ) : (
          <p className='no-data'>No Fork</p>
        )}
      </Avatar.Group>
    </Skeleton>
  );
};

export default Fork;
