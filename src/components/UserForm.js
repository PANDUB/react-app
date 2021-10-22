import  React from "react";
import "./UserForm.css";

function UserForm(){
return (
<div class="form-container">
 <form class="register-form">  
  <input
  id ="firstname"
  class="form-field"
  type="text"
  placeholder="First Name"
  name ="firstname"/>
  <input
  id ="lastname"
  class="form-field"
  type="text"
  placeholder="Last Name"
  name ="lastname"/>
<button class="form-field" type="submit"> Register </button>
 </form>
</div>

);
}
export default UserForm;