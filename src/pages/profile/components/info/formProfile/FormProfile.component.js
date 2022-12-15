import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  HeartOutlined,
  AuditOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Row, Col, Radio, Form, Image, Typography, Spin, Button } from 'antd';

import { PrimaryButton } from '../../../../../components/button';
import FormInput from '../../../../../components/input';
// import { upload } from '../../../../../config/firebase/firebase';
import { ProfileSchema } from '../../../schema/Schema';
import DefaultImg from '../../../../../assets/profile/defaultImg.png';
import { WrapperForm, ValidationError } from './styled';
import axios from 'axios';
import { api, api_image } from '../../../../../API/api';

export default function FormProfile() {
  const { Text } = Typography;

  const inputRef = useRef(null);

  const [isUpload, setIsUpload] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(ProfileSchema),
  });

  // const updateInfoSuccess = () => {
  //   toastOn('success', t('change_info_success'));
  // };

  // const updateInfoFail = () => {
  //   toastOn('error', t('change_info_fail'));
  // };

  const onSubmit = (data) => {
    console.log(data);
    axios.post(api+"api/editprofile/"+ (JSON.parse(localStorage.getItem("user-info")).id),data,
    {
      headers : {
        "Content-Type": "multipart/form-data",
    }
  } 
    ).then(
      res => {
        console.log(res.data)
        localStorage.setItem('user-info', JSON.stringify(res.data))
      }
    )
    // delete data.email;
    // updateUser({ data, callbackSuccess: updateInfoSuccess, callbackFail: updateInfoFail });
  };

  const handleChange = async (e) => {
    setIsUpload(true);
    // await upload(e.target.files[0])
    //   .then((res) => {
    //     const data = { avatar: res };
    //     // updateUser({ data, callbackSuccess: updateInfoSuccess, callbackFail: updateInfoFail });
    //   })
    //   .catch()
    //   .finally(() => setIsUpload(false));
    setIsUpload(false);
  };
console.log(JSON.parse(localStorage.getItem('user-info')).avatar)
  return (
    <WrapperForm>
      {/* {currentUser ? (
        <Spin spinning={isLoading || isUpload} delay={500}> */}
          <Form className='form' onFinish={handleSubmit(onSubmit)}>
            <Row justify='center' align='middle' gutter={24}>
              <Col xl={6} sm={24} xs={24} className='flex-avatar'>
                <Image
                  src={JSON.parse(localStorage.getItem('user-info')).avatar !== null
                    ? api_image+ JSON.parse(localStorage.getItem('user-info')).avatar 
                    : DefaultImg}
                  // src={DefaultImg}
                  alt='Avatar'
                  className='avatar-view'
                />
                <EditOutlined
                  onClick={() => {
                    inputRef.current.click();
                  }}
                />
                <input
                  className='upload-file'
                  ref={inputRef}
                  type='file'
                  // onChange={handleChange}
                  accept='image/gif, image/jpeg, image/png'
                />
              </Col>

              <Col xl={18} sm={24} xs={24}>
                <FormInput
                  label={'Name'}
                  name='name'
                  defaultValue={JSON.parse(localStorage.getItem('user-info')).username}
                  control={control}
                  errors={errors?.username?.message}
                  Icon={UserOutlined}
                />
                <FormInput
                  label={'Email'}
                  name='email'
                  defaultValue={JSON.parse(localStorage.getItem('user-info')).email}
                  control={control}
                  errors={errors?.email?.message}
                  Icon={MailOutlined}
                  disabled={true}
                />
                <FormInput
                  label={'Phone Number'}
                  name='phone'
                  defaultValue={JSON.parse(localStorage.getItem('user-info')).phone}
                  control={control}
                  errors={errors?.phoneNumber?.message}
                  Icon={PhoneOutlined}
                />
              </Col>
            </Row>

            <FormInput
              label={'Birth Date'}
              name='birthdate'
              // defaultValue={currentUser?.birthdate}
              // defaultValue={JSON.parse(localStorage.getItem('user-info')).birth}
              control={control}
              errors={errors?.birthdate?.message}
              Icon={CalendarOutlined}
              span={20}
              type='date'
            />

            <Row justify='center' align='middle'>
              <Col xl={4} sm={24} xs={24}>
                <Text className='form__label'>
                  <HeartOutlined className='icon' /> {'Gender'}:
                </Text>
              </Col>

              <Col xl={20} sm={24} xs={24}>
                <Controller
                  name='gender'
                  // defaultValue={currentUser?.gender.toString()}
                  defaultValue={JSON.parse(localStorage.getItem('user-info')).gender}
                  control={control}
                  render={({ field }) => (
                    <Radio.Group className='radio-gender' {...field}>
                      <Radio value={1}> {'Male'}</Radio>
                      <Radio value={2}>{'Female'}</Radio>
                    </Radio.Group>
                  )}
                />
              </Col>
            </Row>

            <Row>
              <Col xl={{ span: 20, offset: 4 }} sm={24} xs={24}>
                <ValidationError>{errors.gender && errors.gender?.message}</ValidationError>
              </Col>
            </Row>

            <FormInput
              label={'Address'}
              name='address'
              defaultValue='address'
              control={control}
              errors={errors?.address?.message}
              Icon={AuditOutlined}
              span={20}
            />

            <Row>
              <Col span={24} className='button-save'>
                <Button type='primary' htmlType='submit'>Save Change</Button>
              </Col>
            </Row>
          </Form>
        {/* </Spin>
      ) : null} */}
    </WrapperForm>
  );
}
