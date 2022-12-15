import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Space, Button, Typography } from 'antd';

export default function InfoAuth() {
  const { Title, Text } = Typography;

  const navigate = useNavigate();


  return (
    <Space direction='vertical' size='large'>
      <Row>
        <Col span={24}>
          <Title level={5}>
            <LockOutlined />
            Security
          </Title>
        </Col>
      </Row>

      <Row type='flex' align='middle'>
        <Col md={17} sm={16} xs={16}>
          <Text>Setting Password</Text>
        </Col>

        <Col md={7} sm={8} xs={8}>
          <Button size='medium' type='primary' onClick={() => navigate('/change-pass')}>
            Setting
          </Button>
        </Col>
      </Row>
    </Space>
  );
}
