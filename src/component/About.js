const About=()=>{
    return(
        <>
        <h1 className="text-center" style={{marginTop:'30px'}}>This is About components</h1>
        <div className="container" style={{marginTop:'30px'}}>
            <div className="row">
                <div className="col-md-6">
                <img className="img1" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image 1"/>


                </div>

                <div className="col-md-6">
                    <p>
                        <h2>
                        What is Lorem Ipsum?
                        </h2>
                        <br>
                        </br>
                        <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                             the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                             with desktop publishing software like Aldus PageMaker including versions of Lorem 
                             Ipsum.
                             </blockquote>


                    </p>
                </div>
            </div>

        </div>

        </>
    );
}
export default About;
