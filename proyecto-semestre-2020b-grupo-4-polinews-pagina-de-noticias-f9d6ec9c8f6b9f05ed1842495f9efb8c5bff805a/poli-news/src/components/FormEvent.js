import React, { useState } from 'react';
import moment from 'moment';
import { useAuth } from '../lib/Auth';
import { Modal, Form, Input, TimePicker, Button, DatePicker, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FormEvent = () => {
	const { RangePicker } = DatePicker;
	const { Option } = Select;
	const { registerFormEvents } = useAuth();

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const normFile = (e) => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const validateMessages = {
		required: '${label} es obligatorio!',
		types: {
			date: '${label} no es una fecha valida',
			number: '${label} no es un numero valido',
		},
		number: {
			range: '${label} valores entre ${min} y ${max}',
		},
	};

	const onFinish = (data) => {
		registerFormEvents(data);
		console.log('Formulario de Evento', data);
	};

	return (
		<div>
			<>
				<Button className="my-btn" type="primary" onClick={showModal}>
					Crear Eventoo
				</Button>
				<Modal
					className="my-modal"
					title="Crear Evento"
					visible={isModalVisible}
					footer={null}
					onCancel={handleCancel}
				>
					<Form {...layout} name="create_event" onFinish={onFinish} validateMessages={validateMessages}>
						<Form.Item name="name" label="Nombre del evento:" rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item name="date" label="Fecha del evento:" rules={[{ required: true }]}>
							<RangePicker
								dateRender={(current) => {
									const style = {};
									if (current.date() === 1) {
										style.border = '1px solid #1890ff';
										style.borderRadius = '50%';
									}
									return (
										<div className="ant-picker-cell-inner" style={style}>
											{current.date()}
										</div>
									);
								}}
							/>
						</Form.Item>
						<Form.Item name="status" label="Tipo de evento:" rules={[{ required: true }]}>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Select type"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="private">Privado</Option>
								<Option value="public">Publico</Option>
								<Option value="alone">Solo yo</Option>
							</Select>
						</Form.Item>
						<Form.Item name="time" label="Hora de inicio:">
							<TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
						</Form.Item>
						<Form.Item name="description" label="Descripcion">
							<Input.TextArea />
						</Form.Item>
						<Form.Item
							name="photo"
							label="Foto"
							valuePropName="fileList"
							getValueFromEvent={normFile}
							extra="Selecciona un archivo .jpg"
						>
							<Upload name="logo" action={null} listType="picture">
								<Button icon={<UploadOutlined />}>Click to upload</Button>
							</Upload>
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
							<Button type="primary" htmlType="submit">
								Crear
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</>
		</div>
	);
};

export default FormEvent;
