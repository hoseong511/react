export default function Profile(props) {
  console.log(props);
  const id = props.match.params.id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile 페이지입니다</h2>
      {id && <p>아이디는 {id} 입니다</p>}
    </div>
  );
}
