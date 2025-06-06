export default function UserRow(props) {

    return (
            <tr className='user-row'>
                <td className='user-row-items'>{props.id || 'N/A'}</td>
                <td className='user-row-items'>{props.firstName || 'N/A'}</td>
                <td className='user-row-items'>{props.lastName || 'N/A'}</td>
                <td className='user-row-items'>{props.email || 'N/A'}</td>
                <td className='user-row-items'>{props.gender || 'N/A'}</td>
                <td className='user-row-items'>{props.phone || 'N/A'}</td>
            </tr>
    );
}