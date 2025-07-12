<div class="modal">
  <form id="empForm">
    <h2>${formTitle}</h2>

    <label>First Name
      <input name="firstName" type="text" value="${record.firstName!}" required />
    </label>

    <label>Last Name
      <input name="lastName" type="text" value="${record.lastName!}" required />
    </label>

    <div class="flex-group">
      <label>Email
        <input name="email" type="email" value="${record.email!}" required />
      </label>
      <label>Department
        <input name="department" type="text" value="${record.department!}" required />
      </label>
    </div>

    <label>Role
      <input name="role" type="text" value="${record.role!}" required />
    </label>

    <pre id="formErrors" class="error hidden"></pre>

    <div class="form-actions">
      <button type="button" id="cancelBtn" class="btn neutral">Cancel</button>
      <button type="submit" class="btn neutral">${submitText}</button>
    </div>
  </form>
</div>
