import {Avatar, Card, Col, Image, Row} from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useGetUser} from "../Landing/queries";
import "./index.less";

const index = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {
    data: {owner: {avatar_url, login: name} = {}} = {},
    isLoading,
    isError,
  } = useGetUser(id);

  if (isError) {
    navigate("/", {replace: true});
  }
  return (
    <div className='wrapper-profile-detail'>
      <Row align='middle' justify='center' gutter={[20]}>
        <Col>
          <Card
            loading={isLoading}
            style={{width: 300}}
            cover={<Image alt='example' src={avatar_url} loading={isLoading} />}
          >
            <Meta
              avatar={<Avatar src={avatar_url} />}
              title={name}
              description='This is the description'
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default index;
