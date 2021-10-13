import React, { useState } from 'react'
import * as XLSX from 'xlsx';
import axios from 'axios';
import Sidebar from './components/Sidebar';

export default function BulkUpload() {
    const [state, setState] = useState([]);

    const onFileChange = event => {

        setState({ selectedFile: event.target.files[0] });


    };

    const onFileUpload = () => {
        const reader = new FileReader();
        
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];

            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            console.log(data);
        
        };
        reader.readAsBinaryString(state.selectedFile);

        // const formData = new FormData();

        // formData.BulkUploadend(
        //     "myFile",
        //     state.selectedFile,
        //     state.selectedFile.name,
        // );
        
        // axios.post("api/faculty", formData);
    };

    return (
      <div><Sidebar/>
        <section className="vh-100" >
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ bordeRadius: "25px", backgroundColor:"orange"}} className="lalit">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        <div>
            <div>
            <h1 style={{textAlign:"center"}}>Select File</h1>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
        </div>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}

// import axios from 'axios';

// import React, { Component } from 'react';

// class BulkUpload extends Component {

//     state = {

//         // Initially, no file is selected
//         selectedFile: null
//     };

//     // On file select (from the pop up)
//     onFileChange = event => {

//         // Update the state
//         this.setState({ selectedFile: event.target.files[0] });

//     };

//     // On file upload (click the upload button)
//     onFileUpload = () => {

//         // Create an object of formData
//         const formData = new FormData();

//         // Update the formData object
//         formData.BulkUploadend(
//             "myFile",
//             this.state.selectedFile,
//             this.state.selectedFile.name
//         );

//         // Details of the uploaded file
//         console.log(this.state.selectedFile);

//         // Request made to the backend api
//         // Send formData object
//         axios.post("api/uploadfile", formData);
//     };

//     // File content to be displayed after
//     // file upload is complete
//     fileData = () => {

//         if (this.state.selectedFile) {

//             return (
//                 <div>
//                     <h2>File Details:</h2>

//                     <p>File Name: {this.state.selectedFile.name}</p>


//                     <p>File Type: {this.state.selectedFile.type}</p>


//                     <p>
//                         Last Modified:{" "}
//                         {this.state.selectedFile.lastModifiedDate.toDateString()}
//                     </p>

//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <br />
//                     <h4>Choose before Pressing the Upload button</h4>
//                 </div>
//             );
//         }
//     };

//     render() {

//         return (
//             <div>
//                 <h1>
//                     GeeksforGeeks
//                 </h1>
//                 <h3>
//                     File Upload using React!
//                 </h3>
//                 <div>
//                     <input type="file" onChange={this.onFileChange} />
//                     <button onClick={this.onFileUpload}>
//                         Upload!
//                     </button>
//                 </div>
//                 {this.fileData()}
//             </div>
//         );
//     }
// }

// export default BulkUpload;
