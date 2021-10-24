const Login=()=>{
    return(
        <>
         <div className="container">
             <h1 className="shadow-sm text-info mt-5 p-3 text-center rounded">Admin</h1>
             <div className="row m-40 p-50 col-lg-6 offset-lg-4">
                 <div className="mt-5 p-5 shadow-lg align-items-center">
                 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" class="btn btn-info">Submit</button>
</form>
                 </div>
             </div>
         </div>
         
        </>


    );
}
export default Login;
