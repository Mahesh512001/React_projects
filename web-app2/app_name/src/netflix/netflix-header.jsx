export function NetflixHeader() {
  return (
    <header className="d-flex justify-content-between p-3 text-white">
      <div>
        <span className="fs-1 fw-bold text-danger">NETFLIX</span>
      </div>
      <div className="d-flex m-3">
        <div>
          <div className="input-group">
            <span className="bi input-group-text bi-translate"></span>
            <select className="form-select" defaultValue={5}>
              <option value="5" hidden>Language</option>
              <option value="4">English</option>
              <option value="1">Hindi</option>
              <option value="2">Spanish</option>
              <option value="3">French</option>
            </select>
          </div>
        </div>

        <div>
          <button className="btn btn-danger mx-3">Sign In</button>
        </div>
      </div>
    </header>
  );
}
