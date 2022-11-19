import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'

const Project = () => {
    const { id } = useParams()
    const { loading, data, error } = useQuery(GET_PROJECT, {
        variables: { id }
    })
    console.log(error);
    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>
    return (
        <div>Project</div>
    )
}
export default Project