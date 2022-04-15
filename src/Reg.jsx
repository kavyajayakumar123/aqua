function Reg() {

    function Alert(){
        alert("SuccessfullyRegistered");
    }
    return (
        <>
            <div className="gallery">
                <h1>AQUA FUN</h1>
            </div>

            <div className="reg">

                <div className="left">
                    <img src="https://static1.bigstockphoto.com/0/1/1/large1500/110538953.jpg" alt="" srcset="" />

                </div>


                <div className="right">
                    <h1>Registration Form</h1>
                    <div className="details">
                        <label>Full Name</label>
                        <br />
                        <input type="text" />
                        <input type="text" />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <label>Address</label>
                        <br />
                        <input type="text" />
                        <br />
                        <br />
                        <input type="text" />
                        <br />
                        <br />
                        <input type="text" />
                        <input type="text" />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <label>E-mail</label>
                        <br />
                        <input type="text" />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <label>Number of Members</label>
                        <br />
                        <br />
                        <input type="text" />
                        <br />
                        <br />
                        <br />
                        <a id="registration"href=""><button onClick={Alert}>Registred</button></a>
                    </div>

                </div>


            </div>

        </>
    )
}
export default Reg;