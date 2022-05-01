function Meetup({ meetup }) {
  return (
    <div>
      {meetup.map((meet) => (
        <div
          key={meet.id}
          style={{
            backgroundImage: `url(${meet.img})`,
          }}
        >
          <h1>{meet.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Meetup;
