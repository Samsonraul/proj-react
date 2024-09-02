import Button from "./Button";

function Card() {
    return (
      <div className="card">
        <h3 className="greet">Hey There,</h3>
        <h2 className="name">I'm Raul Samson</h2>
        <h3 className="title">-Web Developer</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          repellendus commodi adipisci minima explicabo beatae hic quae excepturi
          officiis corporis, quam modi ipsum a doloremque soluta asperiores eos
          accusantium dolorem.
        </p>
        <Button />
      </div>
    );
  }
  
  export default Card;