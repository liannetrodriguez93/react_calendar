export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className='navbar-brand'>
        <i className="fas fa-calendar-alt"></i>
        &nsbp
        Lila
      </span>

      <button className='btn btn-outlined'>
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
}