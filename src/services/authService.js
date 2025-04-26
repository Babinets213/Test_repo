import { login as loginApi, register as registerApi } from "../api/authApi";

class AuthService {
  async register(username, password) {
    const { data } = await registerApi({ username, password });
    return data;
  }

  async login(username, password) {
    const { data } = await loginApi({ username, password });
    localStorage.setItem('user', JSON.stringify(data.user)); // зберігаємо користувача
    return data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}

export default new AuthService();
