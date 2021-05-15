import queryString from "query-string";

export default function About(props) {
  const searchParams = props.location.search;
  const obj = new URLSearchParams(searchParams); // 브라우저의 내장 객체이므로 지원하지 않는 브라우저도 있을 수 있다. ㅜ
  console.log(obj.get("name"));

  const query = queryString.parse(searchParams);
  return (
    <div>
      {query.name ? <h2>쿼리스트링 -&gt; {query.name}</h2> : <h1>야호</h1>}
    </div>
  );
}
