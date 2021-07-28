interface Data {
  post: {
    id: string;
    title: string;
    body: string;
  };
}

export default function Post({ post }: Data): JSX.Element {
  const { title, body, id } = post;
  return (
    <div className="Card">
      <h1 className="Card--title">
        {id}. {title}
      </h1>
      <p className="Card--body">{body}</p>
    </div>
  );
}
