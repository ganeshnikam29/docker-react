const cockpit = (props) =>{
    const  style ={
        backgroundColor :'white',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
      }
      
    return (
      <div>
        <h1>{props.title}</h1>
        <button style={style} onClick={props.clicked}>
          Toggle Person
        </button>
      </div>
    );
}

export default cockpit; 