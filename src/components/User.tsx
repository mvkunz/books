const user = {
  name: 'Maria Vitória',
  lastName: 'Kunz',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
