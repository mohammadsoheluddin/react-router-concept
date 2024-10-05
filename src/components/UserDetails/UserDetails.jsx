import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, website } = user;
  return (
    <div>
      <span>{id}</span>
      <h1>User Name: {name}</h1>
      <h4>Website: {website}</h4>
    </div>
  );
};

export default UserDetails;
