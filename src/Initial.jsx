

function Initial ({handleClickPage}){
    return(
        (
            <section className="start-page">
              <div className="start-page-header">
                <h1>Welcome to Paradise!</h1>
                <h2>With love.</h2>
                <button onClick={handleClickPage}>Get started!</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis iure, cumque repellendus totam aliquid sunt, modi amet excepturi rem voluptatem eaque iusto architecto libero vitae in culpa? Voluptate ducimus eos dignissimos quibusdam molestiae ut minima culpa hic pariatur quis. Cumque modi minus blanditiis sequi asperiores, in illo ad vero delectus.
              </p>
            </section>
          )
    )
}

export default Initial;