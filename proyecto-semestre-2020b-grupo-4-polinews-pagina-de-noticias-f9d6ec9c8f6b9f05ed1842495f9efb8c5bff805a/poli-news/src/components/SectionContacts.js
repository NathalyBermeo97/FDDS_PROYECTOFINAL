import React, { useState } from 'react';
import { Col, Row, Image, Button } from 'antd';
import ContactsInfo from '../constants/ContactsInfo';
import FormEvent from './FormEvent';

const SeccionContacts = () => {
	const [indice, SetIndice] = useState(2);

	return (
		<div className="contacts" style={{ textAlign: 'center' }}>
			<Row justify="center">
				<Col span={24}>
					<h1 className="my-title">{ContactsInfo[indice].title}</h1>
				</Col>
			</Row>
			<Row justify="center">
				<Col span={12}>
					<Image src={ContactsInfo[indice].src} width="100%" />
				</Col>

				<Col span={12}>
					<h1 className="my-text" style={{ color: '#ffbf0f' }}>
						{ContactsInfo[indice].subtitle}
					</h1>
					<p className="my-text" style={{ textAlign: 'top' }}>
						{ContactsInfo[indice].text}
					</p>
				</Col>
				<FormEvent />
			</Row>
		</div>
	);
};
export default SeccionContacts;
