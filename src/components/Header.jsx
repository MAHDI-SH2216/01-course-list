const CourseStatus = ["All", "Active", "Upcoming", "Complited"];

function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="course-status">
        {CourseStatus.map((s) => (
          <di className="active" key={s}>
            {s}
          </di>
        ))}
      </div>
    </div>
  );
}

export default Header;
