import React from "react";
function Footer(){
    return (
        <footer>
  		<div className="container-fluid text-center" style={{backgroundColor: "black"}}>
  			<div className="py-5">
  				<h2 className="text-light">Intrested in working with me ?</h2>
  				<button className="btn btn-outline-light btn-lg mt-3">let's talk</button>
  			</div>
  			<div className="row">
  				<div className="col-12 col-md-4 py-3">
  					<h5 className="text-info pb-3">More Links</h5>
  					<a href="/" className="text-light d-block">Blog</a>
  					<a href="/" className="text-light d-block">Home</a>
                      <a href="/" className="text-light d-block">Projects</a>
  					<a href="/" className="text-light d-block">Contact me</a>
  					<a href="/" className="text-light d-block">Write a recomendation<i className="fas fa-heart text-light"></i></a>
  				</div>
  				<div className="col-12 col-md-4 text-light text-justify py-3 ">
  					<p>The Govt. of AP has formed 7 different Missions to achieve double digit growth for the state and to make AP among the most developed state in the country.</p>
  				</div>
  				<div className="col-12 col-md-4 py-3">
  					<h5 className="text-info pb-3">Social</h5>
  					<a href="/">
  						<i className="fab fa-linkedin text-light h1 d-block"></i>
  					</a>
  					<a href="/">
  						<i className="fab fa-github text-light h1 d-block"></i>
  					</a>
  					<a href="/">
  						<i className="fas fa-envelope text-light h1 d-block"></i>
  					</a>
  				</div>
  			</div>

  			<div className="text-muted py-3">
  				<p>Copyright&copy; vijay kumar
  					<script>
  						document.write(new Date().getFullYear());
  					</script>
  				</p>
  			</div>
  		</div>
  	</footer>
    );
}
export default Footer; 