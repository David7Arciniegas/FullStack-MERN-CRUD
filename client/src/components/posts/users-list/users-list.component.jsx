import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';

// Redux actions
import { getUsers } from '../../../store/actions/users.actions';

// Components
import UserItem from '../user-item/user-item.component';

import classes from './user-list.module.css';

const UsersList = () => {
	const users = useSelector(state => state.users.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div className={classes['post-list-container']}>
			<Row gutter={{ lg: 100 }} justify='space-around'>
				{posts &&
					posts.map(user => (
						<Col key={user.id} span={24}>
							<UserItem user={user} />
						</Col>
					))}
			</Row>
		</div>
	);
};

export default UsersList;
