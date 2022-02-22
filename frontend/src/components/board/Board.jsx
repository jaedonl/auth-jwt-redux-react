import React, {useState, useEffect} from 'react';
import './Board.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from '../../redux/apiCalls'

const Board = () => {
    const [isFetching, setIsFetching] = useState(true)
    const currentUser = useSelector((state) => state.auth)
    const userList = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const getUser = async () => {
            await getUserList(dispatch)
            setIsFetching(false)
        }                
        getUser()
    }, [])

    useEffect(() => {
        if (userList.users.length > 0) console.log(userList.users);   
    }, [isFetching])

    return (
        <div className="board">
            <h1>User Board</h1>

            <div className="userlist">
                { isFetching 
                    ? <p>Loading...</p> 
                    : userList.users.map((user, idx) => (
                        <div className="useritem" key={idx}>
                            <h2>{user.username}</h2>
                            <h3>{user.email}</h3>
                            <h4>{!user.isAdmin ? 'Regular user' : 'Admin user'}</h4>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};


export default Board;
