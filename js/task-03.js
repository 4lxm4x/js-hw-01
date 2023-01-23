  const ADMIN_PASSWORD = 'qwerty';
  let message;
  //const pass = '123';
  const pass = prompt('Input password');

  switch (pass) {
    case null:
      message = 'Canceled by user';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Доступ запрещен, неверный пароль!';
      break;
  }
alert(message);