const Button =()=>{

    const showAlert = () => {
    alert('Primary button clicked!');
  };

    return(
        <>
        <button 
            type="button" 
            className="btn btn-primary me-2" 
            onClick={showAlert}
          >
            Show Alert
          </button>
        </>
    )

}
export default Button;