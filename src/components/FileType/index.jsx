import React from "react";
import {Tag} from "antd";

const _getColor = (type) => {
  switch (type) {
    case "application/x-ruby":
      return "magenta";
    case "text/html":
      return "#cc0000";
    case "text/plain":
      return "lime";
    case "text/markdown":
      return "purple";
    case "image/png":
    case "image/jpg":
    case "image/jpeg":
      return "blue";
    default:
      return "orange";
  }
};

const FileType = ({files = {}}) => {
  return Object.keys(files)?.map((file, i) => {
    return (
      <Tag key={files[file]?.filename} color={_getColor(files[file]?.type)}>
        # {files[file]?.type}
      </Tag>
    );
  });
};

export default FileType;
