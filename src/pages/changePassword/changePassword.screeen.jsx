import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Row, Col, Typography, Form, Checkbox, Space, Spin, Button } from 'antd';

import { ChangePasswordSchema } from './schema';
import FormInput from '../../components/input';
import { Wrapper } from './styled';

export default function ChangePassword() {
  const { Title } = Typography;

  const [isHide, setIsHide] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(ChangePasswordSchema),
  });

  // const updatePasswordSuccess = () => {
  //   toastOn('success', t('change_pass_success'), '/account/profile');
  // };

  // const updatePasswordFail = () => {
  //   toastOn('error', t('change_pass_fail'));
  // };

  const onSubmit = (data) => {
    console.log(data)
    // updatePassword({
    //   data,
    //   callbackSuccess: updatePasswordSuccess,
    //   callbackFail: updatePasswordFail,
    // });
  };

  return (
    <Spin spinning={false}>
      <Wrapper>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Row className='form'>
            <Col span={24}>
              <Title level={5}>Change Password</Title>
            </Col>

            <Col span={16} offset={4}>
              <FormInput
                label={'New Password'}
                name='password'
                control={control}
                errors={errors?.password?.message}
                type={isHide ? 'password' : 'text'}
              />

              <FormInput
                label={'Enter New Password'}
                name='confirm_password'
                control={control}
                errors={errors?.confirm_password?.message}
                type={isHide ? 'password' : 'text'}
              />

              <Space direction='vertical' size='middle' className='form__space'>
                <Row>
                  <Col xl={{ span: 18, offset: 6 }} sm={24} xs={24}>
                    <Checkbox onChange={(e) => setIsHide(Boolean(!e.target.checked))} className='form__checkbox '>
                      Show Password
                    </Checkbox>
                  </Col>
                </Row>

                <Row>
                  <Col xl={{ span: 18, offset: 6 }} sm={24} xs={24} className='form__btn'>
                    <Button>Save Change</Button>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </Form>
      </Wrapper>
    </Spin>
  );
}
