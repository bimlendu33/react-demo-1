const DestructureProps = ({ name, age, address }) => {
  return (
    <>
      <ul>
        <li>
          <strong>Name: {name}</strong>
        </li>
        <li>
          <strong>Age: {age}</strong>
        </li>
        <li>
          <strong>Address: {JSON.stringify(address)}</strong>
        </li>
      </ul>
    </>
  );
};

export default DestructureProps;
