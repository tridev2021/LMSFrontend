import React from 'react'
import { Card } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


// Swal.fire({
//     title: '<strong>HTML <u>example</u></strong>',
//     icon: 'info',
//     html:
//       'You can use ' +
//       '<a href="/studentdashboard">dashbord </a> ' +
//       'and other HTML tags',
//     showCloseButton: true,
//     showCancelButton: true,
//     focusConfirm: false,
//     confirmButtonText:
//       '<i class="fa fa-thumbs-up"></i> Great!',
//     confirmButtonAriaLabel: 'Thumbs up, great!',
//     cancelButtonText:
//       '<i class="fa fa-thumbs-down"></i>',
//     cancelButtonAriaLabel: 'Thumbs down'
//   })
export default function () {
    return (
        <div>
            <Sidebar/>
        </div>
    )
}
