// import { useUser } from '@/lib/auth';
// import { ROLES } from '@/lib/authorization';

export const DashboardRoute = () => {
  //   const user = useUser();
  return (
    <>
      <h1 className="text-xl">
        {/* Welcome <b>{`${user.data?.firstName} ${user.data?.lastName}`}</b> */}
        Welcome <b>{`Javier Palomino`}</b>
      </h1>
      <h4 className="my-3">
        {/* Your role is : <b>{user.data?.role}</b> */}
        Your role is : <b>Admin</b>
      </h4>

      {/* {user.data?.role === ROLES.USER && (
        <ul className="my-4 list-inside list-disc">
          <li>Create comments in discussions</li>
          <li>Delete own comments</li>
        </ul>
      )}
      {user.data?.role === ROLES.ADMIN && (
        <ul className="my-4 list-inside list-disc">
          <li>Create discussions</li>
          <li>Edit discussions</li>
          <li>Delete discussions</li>
          <li>Comment on discussions</li>
          <li>Delete all comments</li>
        </ul>
      )} */}
    </>
  );
};
