import { useParams } from "react-router-dom"

const UsersDetails = () => {
    const {id, name} = useParams()

    return (
        <>
            <h2>UsersDetails</h2>
            <div>This is {name}! User identified with ID {id}</div>
        </>
    )
}

export default UsersDetails