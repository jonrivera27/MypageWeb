"user client";
import {useRouter} from 'next/navigation';


function Users({users}) {

   const router = useRouter()

    return(
        <ul>
        {Users.map((Users)=> (
            <li key={users.id}>
              onClick={() => {
              router.push(`/users/${users.id}`);
              }}
           
              <div>
                <h5>{users.id}{users.first_name}{users.last_name} {user.first_correo}</h5>
                <p>{users.email}</p>
              </div>
              <img src={users.avatar} alt={users.email} />
            </li>
          ))
        }
      </ul>
    )

}
export default Users