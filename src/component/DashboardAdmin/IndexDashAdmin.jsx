import React from 'react'
import "../../assets/css/dashboard_user/dashboard.css"

const IndexDashAdmin = () => {
    // const width50 = {
    //   width: "50%",
    // };

    const width90 = {
      width: "90%",
    };
    const width100 = {
      width: "1000px",
    };
  return (
    <>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card" style={width100}>
          <div class="card-body">
            <h4 class="card-title">Striped Table</h4>
            <p class="card-description">
              {" "}
              Add class <code>.table-striped</code>
            </p>
            <div class="table-responsive">
              <table class="table table-hover" style={width90}>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Product</th>
                    <th>Sale</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob</td>
                    <td>Photoshop</td>
                    <td class="text-danger">
                      {" "}
                      28.76% <i class="mdi mdi-arrow-down"></i>
                    </td>
                    <td>
                      <label class="badge badge-danger">Pending</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Messsy</td>
                    <td>Flash</td>
                    <td class="text-danger">
                      {" "}
                      21.06% <i class="mdi mdi-arrow-down"></i>
                    </td>
                    <td>
                      <label class="badge badge-warning">In progress</label>
                    </td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>Premier</td>
                    <td class="text-danger">
                      {" "}
                      35.00% <i class="mdi mdi-arrow-down"></i>
                    </td>
                    <td>
                      <label class="badge badge-info">Fixed</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Peter</td>
                    <td>After effects</td>
                    <td class="text-success">
                      {" "}
                      82.00% <i class="mdi mdi-arrow-up"></i>
                    </td>
                    <td>
                      <label class="badge badge-success">Completed</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Dave</td>
                    <td>53275535</td>
                    <td class="text-success">
                      {" "}
                      98.05% <i class="mdi mdi-arrow-up"></i>
                    </td>
                    <td>
                      <label class="badge badge-warning">In progress</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexDashAdmin;