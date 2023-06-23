import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

export default function EditForm({
  password,
  email,
  role,
  textButton,
  titleText,
  handleButtonClick,
  handlePasswordChange,
  handleRoleChange,
  handleEmailChange
}) {
  return (
    <div className='mainContainer'>
      <div>
        <img src={logo} className="logoEdit" alt="Logo" />
      </div>

      <div className='containerEdit'>
        <h1 className="editheader">{titleText}</h1>

        <form className='formEdit' onSubmit={handleButtonClick}>
          <label>Correo</label>
          <input 
            type="text"
            id="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />

          <label>Cargo</label>
          <select name="role" onChange={handleRoleChange} value={role}>
          <option value="elige tu rol">Elige el rol </option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="chef">Chef</option>
          </select>

          <label>Contraseña</label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            
          />

          <button className='btnEdit' type="submit">{textButton}</button>
        </form>
      </div>
    </div>
  );
}

EditForm.propTypes = {
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired
};
