function Themes(){
  return(
    <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
    <div className="col">
        <div className="card text-center">
            <div className="card-header">HTML5</div>
            <div className="card-body">
              <h5 className="card-title">Canal HTML</h5>
              <p className="card-text">
                Contient tous les canaux HTML créés par les différents utilisateur de l'application.
              </p>
              <a href="!#" className="btn btn-dark btn-outline-success">Lire</a>
            </div>
            <div className="card-footer text-muted">Il y a 2 jours</div>
        </div>
    </div>
    

    <div className="col">
        <div className="card text-center">
            <div className="card-header">CSS3</div>
            <div className="card-body">
              <h5 className="card-title">Canal CSS</h5>
              <p className="card-text">
                Contient tous les canaux CSS créés par les différents utilisateur de l'application.
              </p>
              <a href="!#" className="btn btn-dark btn-outline-success">Lire</a>
            </div>
            <div className="card-footer text-muted">Il y a 2 jours</div>
          </div>
    </div>
    

    <div className="col">
        <div className="card text-center">
            <div className="card-header">Javascript</div>
            <div className="card-body">
              <h5 className="card-title">Canal Javascript</h5>
              <p className="card-text">
                Contient tous les canaux Javascript créés par les différents utilisateur de l'application.
              </p>
              <a href="!#" className="btn btn-dark btn-outline-success">Lire</a>
            </div>
            <div className="card-footer text-muted">Il y a 2 jours</div>
          </div>
    </div>

</div>

  )
}

export default Themes