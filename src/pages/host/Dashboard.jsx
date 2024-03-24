import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const params = useParams();
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVan(data.vans));
    }, [params.id]);
  return (
    <>
        <div>Dashboard</div>
    </>
    )
}

export default Dashboard