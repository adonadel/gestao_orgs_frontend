import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Person {
  id: number;
  name: string;
}

interface User {
  id: number;
  role_id: number;
  people_id: number;
  created_at: string;
  person: Person;
}

interface PaginatedUserResponse {
  data: User[];
}

function UserList() {
  const navigate = useNavigate();
  
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response: AxiosResponse<PaginatedUserResponse> = await axios.get<PaginatedUserResponse>('http://localhost/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
        navigate('/')
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.person.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;
