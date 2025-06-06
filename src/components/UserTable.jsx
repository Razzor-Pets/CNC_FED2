import UserRow from './UserRow'
import { useState, useEffect } from 'react'
import Pagnation from './Pagnation'

export default function UserTable() {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState([])
    const [total, setTotal] =useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [skip, setSkip] = useState(0)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://dummyjson.com/users`)
            const data = await response.json()
            setUsers(data.users)
            setSelectedUser([...data.users].slice(0, limit))
            setTotal(data.users.length)
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        setSkip((page - 1) * limit)
    }, [page, limit])

    useEffect(() => {
        const slicedUsers = [...users].slice(skip, skip + limit)
        setSelectedUser(slicedUsers)
    }, [skip])



    return (
        <div className='user-table-container'>
            <table className='user-table'>
                <thead>
                    <tr className='user-table-header'>
                        <th className='user-table-header-items'>Id</th>
                        <th className='user-table-header-items'>First Name</th>
                        <th className='user-table-header-items'>Last Name</th>
                        <th className='user-table-header-items'>Email</th>
                        <th className='user-table-header-items'>Gender</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody className='user-table-body'>
                    {selectedUser.map((user) => (
                        <UserRow key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email} gender={user.gender} phone={user.phone} />
                    ))}
                </tbody>
            </table>
            <Pagnation page={page} setPage={setPage} limit={limit} skip={skip} total={total} />
        </div>
    );
}