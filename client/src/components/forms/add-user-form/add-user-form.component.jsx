import { useDispatch } from 'react-redux';
import { Form, Input, message } from 'antd';

// Redux actions
import { submitUser } from '../../../store/actions/users.actions';

// Components
import Button from '../../ui/button/button.component';

import classes from './add-post-form.module.css';

const AddUserForm = () => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	const submitHandler = e => {
		if (!e.email || !e.password) {
			return message.error('Enter a valid email and password', 1.5);
		}

		dispatch(submitUser(e.email, e.password));

		form.resetFields();
	};

	return (
		<div className={classes['form-container']}>
			<h2>Create a new user now!</h2>
			<Form
				form={form}
				labelCol={{ span: 0 }}
				wrapperCol={{ span: 24 }}
				layout='vertical'
				name='newUser'
				size='middle'
				onFinish={submitHandler}
			>
				<Form.Item className={classes['form-item']} name='title'>
					<Input placeholder='Super title' />
				</Form.Item>

				<Form.Item
					labelCol={0}
					wrapperCol={24}
					className={classes['form-item']}
					name='content'
				>
					<Input.TextArea
						autoSize={{ minRows: 3, maxRows: 5 }}
						rows={4}
						placeholder='Enter your content'
					/>
				</Form.Item>

				<div className={classes.actions}>
					<Button size='block' color='primary' type='submit'>
						Post!
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default AddPostForm;
