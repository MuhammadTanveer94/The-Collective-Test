import { Avatar, Skeleton, Tooltip } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForkList } from "../../pages/Landing/queries";
import "./index.less";

const Fork = ({ files, id }) => {
  const { data: list = [], isLoading } = useForkList(id);
  const navigate = useNavigate();

  const onNavigate = (id) => {
    navigate(`/${id}`);
  };
  return (
    <Skeleton loading={isLoading} active>
      <Avatar.Group
        maxCount={3}
        maxPopoverTrigger="click"
        size="default"
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
          cursor: "pointer",
        }}
      >
        {list.length > 0 ? (
          list.map((info, index) => {
            return (
              <Tooltip key={index} title={info?.owner?.login} placement="top">
                <Avatar
                  src={info?.owner?.avatar_url}
                  onClick={() => onNavigate(info.id)}
                />
              </Tooltip>
            );
          })
        ) : (
          <p className="no-data">No Fork</p>
        )}
      </Avatar.Group>
    </Skeleton>
  );
};

export default Fork;
