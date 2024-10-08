import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DatePicker, InputNumber, Select, Button, message, Flex } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import 'tailwindcss/tailwind.css';

// Validation Schema using Yup
const schema = yup.object().shape({
  time: yup.date().required('Vui lòng chọn thời gian giao dịch!'),
  quantity: yup.number().positive('Số lượng phải lớn hơn 0!').required('Vui lòng nhập số lượng!'),
  pump: yup.string().required('Vui lòng chọn trụ!'),
  revenue: yup.number().positive('Doanh thu phải lớn hơn 0!').required('Vui lòng nhập doanh thu!'),
  unitPrice: yup.number().positive('Đơn giá phải lớn hơn 0!').required('Vui lòng nhập đơn giá!'),
});

const TransactionForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    message.success('Cập nhật giao dịch thành công!');
  };

  const onError = () => {
    message.error('Vui lòng kiểm tra lại thông tin đã nhập!');
  };

  return (
    <div className="container mx-auto p-4 ">
      {/* Đóng button */}
      <Flex justify='space-between'>
      <Button
        icon={<CloseOutlined />}
        // className="top-2 left-2"
        className='!p-0'
        type="text"
      >
        Đóng
      </Button>

      {/* Cập nhật button */}
      <Button
        type="primary"
        className="top-2 right-2"
        onClick={handleSubmit(onSubmit, onError)}
      >
        Cập nhật
      </Button>

      </Flex>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Nhập giao dịch</h1>

      {/* Form */}
      <form className="space-y-4">
        
        {/* Thời gian */}
        <div>
          <DatePicker
            className="w-full"
            showTime
            placeholder="Thời gian"
            onChange={(date) => setValue('time', date ? dayjs(date).toISOString() : null)}
            format="DD/MM/YYYY HH:mm:ss"
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>

        {/* Số lượng */}
        <div>
          <InputNumber
            className="w-full"
            placeholder="Số lượng"
            min={0}
            step={0.01}
            onChange={(value) => setValue('quantity', value)}
          />
          {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
        </div>

        {/* Trụ */}
        <div>
          <Select
            className="w-full"
            placeholder="Trụ"
            onChange={(value) => setValue('pump', value)}
          >
            <Select.Option value="1">Trụ 1</Select.Option>
            <Select.Option value="2">Trụ 2</Select.Option>
            <Select.Option value="3">Trụ 3</Select.Option>
          </Select>
          {errors.pump && <p className="text-red-500">{errors.pump.message}</p>}
        </div>

        {/* Doanh thu */}
        <div>
          <InputNumber
            className="w-full"
            placeholder="Doanh thu"
            min={0}
            onChange={(value) => setValue('revenue', value)}
          />
          {errors.revenue && <p className="text-red-500">{errors.revenue.message}</p>}
        </div>

        {/* Đơn giá */}
        <div>
          <InputNumber
            className="w-full"
            placeholder="Đơn giá"
            min={0}
            onChange={(value) => setValue('unitPrice', value)}
          />
          {errors.unitPrice && <p className="text-red-500">{errors.unitPrice.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
