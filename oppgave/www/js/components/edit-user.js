import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  // could not update data in database, 

  render() {
    return html`
    <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
    <div style="width: 5rem;">
    <label for "uid" style="padding: 10px">UID</label>
    <input type="text" class="form-control" name="uid" value="${this.user.uid}" readonly>
    <div style="width: 15rem;">
      <label for="uname" style="padding: 10px">Username</label>
      <input name="uname" class="form-control" type="text" value="${this.user.uname}" required>
    </div>
    <div style="width: 15rem;">
      <label for="firstName" style="padding: 10px">First Name</label>
      <input name="firstName" class="form-control" type="text" value="${this.user.firstName}" required>
    </div>
    <div style="width: 15rem;">
      <label for="lastName" style="padding: 10px">Last Name</label>
      <input cname="lastName" class="form-control" type="text" value="${this.user.lastName}" required>
    </div>
    <div style="width: 15rem;">
      <label for="oldPassword" style="padding: 10px">Old Password</label>
      <input type="password" class="form-control" name="oldPassword" type="text" value="">
    </div>
    <div style="width: 15rem;">
      <label for="newPassword" style="padding: 10px">New Password</label>
      <input type="password" class="form-control" name="newPassword" type="text" value="">
  </div>
  <input type="submit" @click=${this.updateUser} name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>
</form>
    `;
  }

  //Updates the information about selected user
  updateUser(selected) {
    //Creates form with data from selected user
    const userForm = new FormData(selected.target.form);
    console.log(selected)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: userForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was updated!");
        } else {
            console.log("The user could not be updated!");
        }
      })
  }



}
customElements.define('edit-user', EditUser);
